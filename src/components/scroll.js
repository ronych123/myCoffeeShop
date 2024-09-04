import React from "react"

function scrollToHeight(targetHeight) {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function scroll() {
        currentPosition = lerp(currentPosition, targetHeight, 0.1);
        window.scrollTo(0, currentPosition);

        if (Math.abs(currentPosition - targetHeight) > 1) {
            window.requestAnimationFrame(scroll);
        }
    }

    window.requestAnimationFrame(scroll);
}

export function HomeScroll () {
    scrollToHeight(0);
}

export function AboutScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 711) {
        scrollToHeight(569);
    } else {
        scrollToHeight(555);
    }
}

export function MenuScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 711) {
        scrollToHeight(1049);
    } else {
        scrollToHeight(1050);
    }
}

export function ProductsScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(1799);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(2110);
    // } else if(pageWidth <= 773 && pageWidth > 711){
    //     scrollToHeight(3055);
    } else {
        scrollToHeight(3075);
    }
}

export function ReviewScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(2409);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(3245);
    } else if(pageWidth <= 773 && pageWidth > 711){
        scrollToHeight(4735);
    } else {
        scrollToHeight(4730);
    }
}

export function ContactScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(2893);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(4115);
    // } else if(pageWidth <= 773 && pageWidth > 711){
    //     scrollToHeight(6035);
    } else {
        scrollToHeight(6000);
    }
}

export function BlogsScroll () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(3369);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(4620);
    // } else if(pageWidth <= 773 && pageWidth > 711){
    //     scrollToHeight(6815);
    } else {
        scrollToHeight(6875);
    }
}
