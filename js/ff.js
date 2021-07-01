if (document.getElementById("countl")) {
    var count = 0;
    var button = document.getElementById("countl");
    var display = document.getElementById("displaycount");

    if (localStorage.getItem('count')) {
        count = localStorage.getItem('count')
    } else count = 0;

    display.innerHTML = count;

    button.onclick = function() {
        count++;
        localStorage.setItem('count', count);
        display.innerHTML = count;
    }
}

if (document.getElementById("feedback")) {
    var feedback = document.getElementById("feedback");


    var feedBackList = [];
    var submissionCounter = 1

    if (localStorage.getItem('feedBackList')) {
        feedBackList = JSON.parse(localStorage["feedBackList"])
        submissionCounter = feedBackList[feedBackList.length - 1].entry
    }

    for (i = 0; i < feedBackList.length; i++) {
        var row = document.getElementById("feedtb").insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = feedBackList[i].entry;
        cell2.innerHTML = feedBackList[i].name;
        cell3.innerHTML = feedBackList[i].skills;
        cell4.innerHTML = feedBackList[i].level;
        cell5.innerHTML = feedBackList[i].user_comment
    }


    feedback.addEventListener("submit", function(evt) {
        evt.preventDefault();
        var user_input = document.getElementById("user_input").value;
        var skills = document.getElementById("skills").value;
        var level = document.getElementById("level").value;
        var user_comment = document.getElementById("user_comment").value;
        /*alert("Thanks for your feedback");*/
        addFeedback(user_input, skills, level, user_comment);
        clearForm();
    });


    function addFeedback(user_input, skills, level, user_comment) {

        submissionCounter += 1;

        feedBackList.push({

            entry: submissionCounter,
            name: user_input,
            skills: skills,
            level: level,
            user_comment: user_comment
        });

        localStorage.setItem('feedBackList', JSON.stringify(feedBackList));

        var row = document.getElementById("feedtb").insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = feedBackList[feedBackList.length - 1].entry;
        cell2.innerHTML = feedBackList[feedBackList.length - 1].name;
        cell3.innerHTML = feedBackList[feedBackList.length - 1].skills;
        cell4.innerHTML = feedBackList[feedBackList.length - 1].level;
        cell5.innerHTML = feedBackList[feedBackList.length - 1].user_comment;
    }


    function clearForm() {
        document.getElementById("user_input").value = "";
        document.getElementById("skills").selectedIndex = 0;
        document.getElementById("level").selectedIndex = 0;
        document.getElementById("user_comment").value = "";
    }

}