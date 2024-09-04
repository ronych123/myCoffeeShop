import React from "react"

export function cardItem() {
    let hovera = document.querySelector('.js-add-to-card');

    let hoveraStyle = window.getComputedStyle(hovera);

    if (hoveraStyle.display === 'none') {
        hovera.style.display = 'block'; 
        hovera.style.right = '0';         
    } else {
        hovera.style.display = 'none';
        hovera.style.right = '-50%';       
    }

}