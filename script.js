let nav = document.querySelector(".navbar");
let navlinks = document.querySelectorAll(".navbar a");
let navlinks2 = document.querySelectorAll(".bots a");
const menuicon = document.querySelector(".menu-list");
const menuimg = document.querySelector(".menu-icon");

navlinks.forEach(item => {
    item.addEventListener("click", roll)
});

navlinks2.forEach(item2 => {
    item2.addEventListener("click", roll2)
})

function roll(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const sections = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: sections -80,
        behavior: "smooth",
    });

}

function roll2(event2) {
    event2.preventDefault();
    const element2 = event2.target;
    const id2 = element2.getAttribute("href");
    const sections2 = document.querySelector(id2).offsetTop;

    window.scroll({
        top: sections2 -80,
        behavior: "smooth",
    });
}



window.addEventListener("scroll", navtransp);

function navtransp() {
    if (window.scrollY > 150) {
        nav.style.opacity = 0.8;
    }else {
        nav.style.opacity = 1;
    }
}

menuicon.style.maxHeight = "0px";


function menu() {

    if (menuicon.style.maxHeight == "0px") {
        menuicon.style.maxHeight = "120px";
        menuimg.style.transform = "rotate(-90deg)";
    }else {
        menuicon.style.maxHeight = "0px";
        menuimg.style.transform = "rotate(0deg)";
    }
    
}