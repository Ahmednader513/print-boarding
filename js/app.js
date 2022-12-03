// Nav Start

var openIcon = document.querySelector("nav .icon .open");
var closeIcon = document.querySelector("nav .icon .close");
var links = document.querySelector("nav .links");
var nav = document.querySelector("nav");

openIcon.addEventListener("click", function() {

    if(links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }

    if(nav.style.paddingBottom === "10px") {
        nav.style.paddingBottom = "25px";
    } else {
        nav.style.paddingBottom = "10px";
    }

    if(openIcon.style.display === "none") {
        openIcon.style.display = "block";
    } else {
        openIcon.style.display = "none";
    }

    if(closeIcon.style.display === "block") {
        closeIcon.style.display = "none";
    } else {
        closeIcon.style.display = "block";
    }

});

closeIcon.addEventListener("click", function() {

    if(links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }

    if(nav.style.paddingBottom === "25px") {
        nav.style.paddingBottom = "10px";
    } else {
        nav.style.paddingBottom = "25px";
    }

    if(openIcon.style.display === "block") {
        openIcon.style.display = "none";
    } else {
        openIcon.style.display = "block";
    }

    if(closeIcon.style.display === "none") {
        closeIcon.style.display = "block";
    } else {
        closeIcon.style.display = "none";
    }

});

// Nav End