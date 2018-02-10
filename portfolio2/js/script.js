$(document).ready(function() { 
    
//GLOBAL VARIABLES
var $windowWidth = $(window).width(),
    resizeBreakpoint = 1085,
    resizeTimer;
    
//WHAT IF

if ($windowWidth >= resizeBreakpoint) {
    
    menuOnHover();
   
} else {
    
    burgerOnClick();
};
    
    
//MENU ON HOVER FUNCTION  

function menuOnHover(){    

var $sidebarMenu = $('.jsNamesOnHover'),
    $menuBtnName = $('.jsSlidingName');
    
    $sidebarMenu.on('mouseenter', function(e){
        $menuBtnName.slideDown(300);
    });
    
    $sidebarMenu.on('mouseleave', function(e){
        $menuBtnName.slideUp(300);
    });
    
    $(window).on('resize', function(e) { // INSURANCE 


        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            $newWidth = $(window).width();
            if ($newWidth < resizeBreakpoint) {
                $menuBtnName.show();
                $sidebarMenu.off();
                burgerOnClick();
                console.log('it works!');
            }

        }, 250);

    });
      
};
    
//BURGER ON CLICK FUNCTION
    
function burgerOnClick(){
    
    var $burgerBtn = $('.jsShowHideBtn'),
    $sidebarMenuShowHide = $('.jsShowHide'),
    isClicked = false;
    
    $burgerBtn.on('click', function(e){
       
        if(isClicked===false){
            $sidebarMenuShowHide.slideDown(200);
            isClicked = true; 
        } else {
            $sidebarMenuShowHide.slideUp(200);
            isClicked = false;
        }

    });
    
    $(window).on('resize', function(e) { // INSURANCE


        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            $newWidth = $(window).width();
            if ($newWidth > resizeBreakpoint) {
                $sidebarMenuShowHide.show();
                $burgerBtn.off();
                menuOnHover();
                console.log('it works too!!!');
            }

        }, 250);

    });
    
};
    
});