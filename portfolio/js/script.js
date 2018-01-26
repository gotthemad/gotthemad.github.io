$(document).ready(function() { 

var $mainMenu = $('.embe-mainMenu'),
    $menuItemName = $('.embe-menuItemName'),
    $mainMenuItem = $('.embe-mainMenuItem');
    
    $menuItemName.hide();

    $mainMenu.on('mouseenter', function(e){
        $menuItemName.fadeIn(300);
        $mainMenuItem.addClass('embe-mainMenuItem-mouseenter');
    });
    
    $mainMenu.on('mouseleave', function(){
        $menuItemName.fadeOut(300);
        $mainMenuItem.removeClass('embe-mainMenuItem-mouseenter');
    });
});


//SMOOTH-SCROLL

//function smoothScroll(){
//    $('li a[href*="#"]:not([href="#"])').click(function(){
//        $('body').animate({
//            scrollTop: $(this.hash).offset().top},
//            500);
//        });
//}


var myMenu = document.getElementById('mojeMenu');
var myMenuItems = document.getElementsByClassName('embe-mainMenuItem');
var myMenuItemsText = document.getElementsByClassName('embe-menuItemName');
var myAllContent = document.getElementsByClassName('allContent');

var intViewportHeight = window.innerHeight;


//FUNKCJE MENU

function menuMouseOver(e) {
    e.stopPropagation();
    if(myMenuItems){
        for (var i=0; i<myMenuItems.length; i++){
            myMenuItems[i].classList.add('menuHover');
            myMenuItemsText[i].classList.add('embeItemNameOver');
            console.log('działa');
        }
    }
}

function menuMouseOut(e) {
    e.stopPropagation();
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


//myMenu.addEventListener("mouseover", menuMouseOver, true);
//myMenu.addEventListener("mouseout", menuMouseOut, true);
//
//document.addEventListener("scroll", newBackground, false);