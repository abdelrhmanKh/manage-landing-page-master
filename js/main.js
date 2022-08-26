





// addEventListener("resize", slider)
// function slider() {

//     const config = {
//         individualItem: '.slide', // class of individual item
//         carouselWidth: window.screen.width > 992 ? 1000 : window.screen.width > 768 && window.screen.width <= 992 ? 750 : 350, // in px
//         carouselId: '#warrp-slider', // carousel selector
//         carouselHolderId: '#slider-up', // carousel should be <div id="carouselId"><div id="carouselHolderId">{items}</div></div>
//     }

//     document.addEventListener("DOMContentLoaded", slideWorker);
//     function slideWorker() {

//         // Get items
//         const el = document.querySelector(config.individualItem);
//         const elWidth = parseFloat(window.getComputedStyle(el).width) + parseFloat(window.getComputedStyle(el).marginLeft) + parseFloat(window.getComputedStyle(el).marginRight);

//         // Track carousel
//         let mousedown = false;
//         let movement = false;
//         let initialPosition = 0;
//         let selectedItem;
//         let currentDelta = 0;

//         document.querySelectorAll(config.carouselId).forEach(function (item) {
//             item.style.width = `${config.carouselWidth}px`;
//         });

//         document.querySelectorAll(config.carouselId).forEach(function (item) {
//             item.addEventListener('pointerdown', function (e) {
//                 mousedown = true;
//                 selectedItem = item;
//                 initialPosition = e.pageX;
//                 currentDelta = parseFloat(item.querySelector(config.carouselHolderId).style.transform.split('translateX(')[1]) || 0;
//             });
//         });

//         const scrollCarousel = function (change, currentDelta, selectedItem) {
//             let numberThatFit = Math.floor(config.carouselWidth / elWidth);
//             let newDelta = currentDelta + change;
//             let elLength = selectedItem.querySelectorAll(config.individualItem).length - numberThatFit;
//             if (newDelta <= 0 && newDelta >= -elWidth * elLength) {
//                 selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${newDelta}px)`;
//             } else {
//                 if (newDelta <= -elWidth * elLength) {
//                     selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${-elWidth * elLength}px)`;
//                 } else if (newDelta >= 0) {
//                     selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(0px)`;
//                 }
//             }
//         }

//         document.body.addEventListener('pointermove', function (e) {
//             if (mousedown == true && typeof selectedItem !== "undefined") {
//                 let change = -(initialPosition - e.pageX);
//                 if (window.screen.width < 992) {
//                     console.log(initialPosition, e.pageX)
//                     change = change * 2
//                 }
//                 console.log(change)
//                 scrollCarousel(change, currentDelta, document.body);
//                 document.querySelectorAll(`${config.carouselId} a`).forEach(function (item) {
//                     item.style.pointerEvents = 'none';
//                 });
//                 movement = true;
//             }
//         });

//         ['pointerup', 'mouseleave'].forEach(function (item) {
//             document.body.addEventListener(item, function (e) {
//                 selectedItem = undefined;
//                 movement = false;
//                 document.querySelectorAll(`${config.carouselId} a`).forEach(function (item) {
//                     item.style.pointerEvents = 'all';
//                 });
//             });
//         });

//         document.querySelectorAll(config.carouselId).forEach(function (item) {
//             let trigger = 0;
//             item.addEventListener('wheel', function (e) {
//                 if (trigger !== 1) {
//                     ++trigger;
//                 } else {
//                     let change = e.deltaX * -3;
//                     let currentDelta = parseFloat(item.querySelector(config.carouselHolderId).style.transform.split('translateX(')[1]) || 0;
//                     scrollCarousel(change, currentDelta, item);
//                     trigger = 0;
//                 }
//                 e.preventDefault();
//                 e.stopImmediatePropagation();
//                 return false;
//             });
//         });
//     }

//     slideWorker();

// }

// slider()



var splide = new Splide('.splide', {
    autoWidth: true,
    rewind: true,
    type: 'loop',
    arrows: false,
    focus: 'center',
    gap: "50px",
    pagination: false,
    breakpoints: {
        768: {
            pagination: true,

        },

    }
});

splide.mount();


const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const smallMenu = document.querySelector(".small-menu");
const backBground = document.querySelector(".back");

hamburger.addEventListener("click", () => {
    hamburger.dataset.value == 1 ? hamburger.src = "/images/icon-close.svg" : hamburger.src = "/images/icon-hamburger.svg";
    hamburger.dataset.value == 1 ? hamburger.dataset.value = 2 : hamburger.dataset.value = 1;
    smallMenu.classList.toggle("show")
    backBground.classList.toggle("availble");
    document.querySelector("body").classList.toggle("overflow")

});