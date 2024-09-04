import React from "react"

export const HamburgerMenu = () => {
            let openMenuButton = document.querySelector('.openMenu');
            let closeMenuButton = document.querySelector('.closeMenu');
            let navMenu = document.querySelector('.nav');
        
            let menuOpen = false;
        
                openMenuButton.addEventListener('click', function () {
                    if (!menuOpen) {
                        navMenu.style.right = '0';
                        closeMenuButton.style.display = 'flex';
                        menuOpen = true;
                    } else {
                        navMenu.style.right = '-50%';
                        closeMenuButton.style.display = 'none';
                        menuOpen = false;
                    }
                });
        
                closeMenuButton.addEventListener('click', function () {
                    navMenu.style.right = '-50%';
                    openMenuButton.style.display = 'flex';
                    closeMenuButton.style.display = 'none';
                    menuOpen = false;
                });
}