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

// FAQ Start

document.querySelector(".button-1").addEventListener("click", function() {
    document.querySelector(".arrow-1").classList.toggle("rotate");
    document.querySelector(".arrow-1").classList.toggle("filter-red");
});

document.querySelector(".arrow-1").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-2").addEventListener("click", function() {
    document.querySelector(".arrow-2").classList.toggle("rotate");
    document.querySelector(".arrow-2").classList.toggle("filter-red");
});

document.querySelector(".arrow-2").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-3").addEventListener("click", function() {
    document.querySelector(".arrow-3").classList.toggle("rotate");
    document.querySelector(".arrow-3").classList.toggle("filter-red");
});

document.querySelector(".arrow-3").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-4").addEventListener("click", function() {
    document.querySelector(".arrow-4").classList.toggle("rotate");
    document.querySelector(".arrow-4").classList.toggle("filter-red");
});

document.querySelector(".arrow-4").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-5").addEventListener("click", function() {
    document.querySelector(".arrow-5").classList.toggle("rotate");
    document.querySelector(".arrow-5").classList.toggle("filter-red");
});

document.querySelector(".arrow-5").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-6").addEventListener("click", function() {
    document.querySelector(".arrow-6").classList.toggle("rotate");
    document.querySelector(".arrow-6").classList.toggle("filter-red");
});

document.querySelector(".arrow-6").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-7").addEventListener("click", function() {
    document.querySelector(".arrow-7").classList.toggle("rotate");
    document.querySelector(".arrow-7").classList.toggle("filter-red");
});

document.querySelector(".arrow-7").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-8").addEventListener("click", function() {
    document.querySelector(".arrow-8").classList.toggle("rotate");
    document.querySelector(".arrow-8").classList.toggle("filter-red");
});

document.querySelector(".arrow-8").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

function show_1() {
    document.querySelector(".answer-1").classList.toggle("show-1");
}

function show_2() {
    document.querySelector(".answer-2").classList.toggle("show-2");
}

function show_3() {
    document.querySelector(".answer-3").classList.toggle("show-3");
}

function show_4() {
    document.querySelector(".answer-4").classList.toggle("show-4");
}

function show_5() {
    document.querySelector(".answer-5").classList.toggle("show-5");
}

function show_6() {
    document.querySelector(".answer-6").classList.toggle("show-6");
}

function show_7() {
    document.querySelector(".answer-7").classList.toggle("show-7");
}

function show_8() {
    document.querySelector(".answer-8").classList.toggle("show-8");
}

// FAQ End