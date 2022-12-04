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

// Faq Start

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Faq End