
let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos) {
        navbar.style.top = "-200px";  
    } else {
        navbar.style.top = "0"; 
    }

    prevScrollpos = currentScrollPos;  
}
