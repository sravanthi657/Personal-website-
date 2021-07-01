function imgchange(event) {
    var image = document.getElementById(event.target.id);
    if (image.getAttribute('src') == "../img/nat3.jpg") {
        image.src = "../img/nat.jpg";
    } else if (image.getAttribute('src') == "../img/nat.jpg") {
        image.src = "../img/nat1.jpg";
    } else if (image.getAttribute('src') == "../img/nat1.jpg") {
        image.src = "../img/nat22.jpg";
    } else if (image.getAttribute('src') == "../img/nat22.jpg") {
        image.src = "../img/nat4.jpg";
    } else {
        image.src = "../img/nat3.jpg"
    }
}