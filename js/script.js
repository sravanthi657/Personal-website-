"use strict";
let navbar = document.getElementById("navbar");
console.log(navbar);
let sticky = navbar.offsetTop;

function getYPosition() {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    return top;
}
document.body.addEventListener('scroll', () => {
    console.debug(sticky, "page ", getYPosition());
    if (getYPosition() >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

})