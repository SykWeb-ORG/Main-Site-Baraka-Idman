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
