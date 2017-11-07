$(document).ready(function() { 
    smoothScroll();
});


//SMOOTH-SCROLL

function smoothScroll(){
    $('#main-nav a[href*="#"]:not([href="#"])').click(function(){
        $('body').animate({
            scrollTop: $(this.hash).offset().top - 50 },
            500);
        });
}


var myMenu = document.getElementById('embeMainMenu');
var myMenuItems = document.getElementsByClassName('embeMainMenuItem');
var myMenuItemsText = document.getElementsByClassName('embeMenuItemName');
var myAllContent = document.getElementsByClassName('allContent');

var intViewportHeight = window.innerHeight;


//FUNKCJE MENU

function menuMouseOver() {
    if(myMenuItems){
        for (var i=0; i<myMenuItems.length; i++){
            myMenuItems[i].classList.add('menuHover');
            myMenuItemsText[i].classList.add('embeItemNameOver');
        }
    }
}

function menuMouseOut() {
    if(myMenuItems){
        for (var i=0; i<myMenuItems.length; i++){
            myMenuItems[i].classList.remove('menuHover');
            myMenuItemsText[i].classList.remove('embeItemNameOver');
        }
    }
}

//KONIEC FUNKCJI MENU

//FUNKCJE SKROLLA



function newBackground() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if( scrollTop > (intViewportHeight*0.5)) {
        myAllContent[0].classList.add('newBackOnScroll');
    } else {
        myAllContent[0].classList.remove('newBackOnScroll');
    }
}


myMenu.addEventListener("mouseover", menuMouseOver, false);
myMenu.addEventListener("mouseout", menuMouseOut, false);

document.addEventListener("scroll", newBackground, false);