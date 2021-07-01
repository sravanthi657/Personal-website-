function imgchange(event) {
    var image = document.getElementById("click");

    if (image.getAttribute('src') == "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everystudent.com%2Ffeatures%2Fknow-God.html&psig=AOvVaw1onbT5SIat9Z1mwUth11Px&ust=1580820895969000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDPjva2tecCFQAAAAAdAAAAABAD") {
        image.src = "https://scitechdaily.com/images/Illustration-Photons-Galaxy.jpg";
    } else if (image.getAttribute('src') == "https://scitechdaily.com/images/Illustration-Photons-Galaxy.jpg") {
        image.src = "https://ak3.picdn.net/shutterstock/videos/11533193/thumb/4.jpg";
    } else if (image.getAttribute('src') == "https://ak3.picdn.net/shutterstock/videos/11533193/thumb/4.jpg") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxMUw_fvwqtdCsOV_V9jEM-DKcQPd_TdTE5pgmbs1iD0Z6IXTW";
    } else if (image.getAttribute('src') == "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxMUw_fvwqtdCsOV_V9jEM-DKcQPd_TdTE5pgmbs1iD0Z6IXTW") {
        image.src = "https://jimdaly.focusonthefamily.com/wp-content/uploads/2019/01/baby-in-womb.jpg";
    } else {
        image.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everystudent.com%2Ffeatures%2Fknow-God.html&psig=AOvVaw1onbT5SIat9Z1mwUth11Px&ust=1580820895969000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDPjva2tecCFQAAAAAdAAAAABAD";
    }
}