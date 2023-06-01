document.addEventListener("DOMContentLoaded", () => {
    console.log("Baraka IDMan");
});  
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
