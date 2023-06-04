import translations from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
    // Appel du fonction counter
    counter("counter-1", 5, 80, 3000);
    counter("counter-2", 10, 85, 3000);
    counter("counter-3", 0, 92, 3000);

    let defaultLang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
    setLang(defaultLang);
    
    //Languages switcher
    const selectSwitcher = document.querySelector("#langs-desk");
    selectSwitcher.addEventListener("change", (e) => {
        setLang(e.target.value);
        localStorage.setItem("lang", e.target.value);
    });
});  
//TODO: Essayer de converter ce code en javascript vanilla
//Show nav in mobile
const wrapper = document.getElementById('wrapper');
function toggleDiv() {
    if (wrapper.style.left === '0px') {
        wrapper.style.left = '-100%';
    } else {
        wrapper.style.left = '0px';
    }
}
let close = document.getElementById('close');
let open = document.getElementById('navtrigger');
let listitem = document.getElementsByClassName('wrapper-list-item');
for (let i = 0; i < listitem.length; i++) {
    listitem[i].addEventListener('click', toggleDiv);
}
close.addEventListener("click", () => {
    toggleDiv();
});
open.addEventListener("click", () => {
    toggleDiv();
});
//magnific popup
$(document).ready(function () {
    $('.gallery__content').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('#splink').on('click', function (e) {
        if (window.innerWidth < 769)
            $("#menu").fadeIn(500);
        $(".fa-angle-down").css({ "transition": "0.9s", "transform": "rotateX(180deg)" })
    })

    $('#splink').on('mouseenter', function (e) {
        if (window.innerWidth > 769) {
            e.preventdefault = false;
            $("#menu").fadeIn(500);
            $(".fa-angle-down").css({ "transition": "0.9s", "transform": "rotateX(180deg)" })
        }
    })
    $('#splink').on('mouseleave', function () {
        if (window.innerWidth > 1) {
            $("#menu").fadeOut();
            $(".fa-angle-down").css({ "transition": "0.9s", "transform": "rotateX(-180deg)" })
        }
    })

});

//Fonction Testimonial
function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
}

//Fonction pour changer la langue du site
function setLang(langage) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach((element) => {
        const elKey = element.getAttribute("data-translate");
        element.textContent = translations[langage][elKey];
    });
}
