$(document).ready(function() { 
    


var $mainMenu = $('.embe-mainMenu'),
    $menuItemName = $('.embe-menuItemName'),
    $mainMenuItem = $('.embe-mainMenuItem'),
    $allContent = $('.allContent');
    
    $menuItemName.hide();

    $mainMenu.on('mouseenter', function(e){
        $menuItemName.delay(100).slideDown(100).addClass('embe-menuItemName-mouseenter');
        $mainMenuItem.addClass('embe-mainMenuItem-mouseenter');
    });
    
    $mainMenu.on('mouseleave', function(e){
        
        $menuItemName.slideUp("fast").removeClass('embe-menuItemName-mouseenter');
        $mainMenuItem.removeClass('embe-mainMenuItem-mouseenter');
    });

//BACKGROUND ON SCROLL
    
var $logoSmall = $('.embe-logo-img'),
    $ity = $('.embe-social')
    $logoSmall.hide();
//    $ity.hide();
    
    $(window).scroll(function(){
        var $actual = $(window).scrollTop(),
            $windowHeight = $(window).height();

        if($actual > ($windowHeight)*(0.7)) {
            $allContent.addClass('backgroundOnScroll');
            $logoSmall.fadeIn(300);
            
        } else {
            $allContent.removeClass('backgroundOnScroll');
            $logoSmall.fadeOut(300);
        }

            
        
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


//var myMenu = document.getElementById('mojeMenu');
//var myMenuItems = document.getElementsByClassName('embe-mainMenuItem');
//var myMenuItemsText = document.getElementsByClassName('embe-menuItemName');
//var myAllContent = document.getElementsByClassName('allContent');
//
//var intViewportHeight = window.innerHeight;


//FUNKCJE MENU
//
//function menuMouseOver(e) {
//    e.stopPropagation();
//    if(myMenuItems){
//        for (var i=0; i<myMenuItems.length; i++){
//            myMenuItems[i].classList.add('menuHover');
//            myMenuItemsText[i].classList.add('embeItemNameOver');
//            console.log('działa');
//        }
//    }
//}
//
//function menuMouseOut(e) {
//    e.stopPropagation();
//    if(myMenuItems){
//        for (var i=0; i<myMenuItems.length; i++){
//            myMenuItems[i].classList.remove('menuHover');
//            myMenuItemsText[i].classList.remove('embeItemNameOver');
//        }
//    }
//}

//KONIEC FUNKCJI MENU

//FUNKCJE SKROLLA
//function newBackground() {
//    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
//
//    if( scrollTop > (intViewportHeight*0.5)) {
//        AllContent[0].classList.add('newBackOnScroll');
//    } else {
//        AllContent[0].classList.remove('newBackOnScroll');
//    }
//}
//document.addEventListener("scroll", newBackground, false);
//


//myMenu.addEventListener("mouseover", menuMouseOver, true);
//myMenu.addEventListener("mouseout", menuMouseOut, true);
//
