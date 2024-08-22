document.addEventListener('click', function (event) {
    const x = event.clientX;
    const screenWidth = window.innerWidth;
    if (x > screenWidth / 2) {
        document.getElementById("mobileNavBar").style.transform = "translate(-800px)";
        document.getElementById("mobileNavBar").style.transitionDuration = "1s";
    }
    console.log(x);
});

function mobilemenu() {
    document.getElementById("mobileNavBar").style.transform = "translate(0px)";
    document.getElementById("mobileNavBar").style.transitionDuration = "0.6s";

}
function menubarDropdown() {

}
// mainbar
window.onscroll = function () { myFunction() };

var mainbar = document.getElementById("myMainbar");
var sticky = mainbar.offsetTop;

function myFunction() {

    if (window.scrollY >= sticky) {
        console.log(sticky);
        mainbar.classList.add("sticky-top");
        mainbar.classList.replace("mainbar", "newmainbar");
        // mainbar.classList.add("mainbaropacity");
    } else {
        mainbar.classList.remove("sticky-top");
        mainbar.classList.replace("newmainbar", "mainbar");
    }
}

function orderNow() {
    location.href = "./order.html";
}
