$(document).ready(function() { 
    
//GLOBAL VARIABLES
var $windowWidth = $(window).width(),
    resizeBreakpoint = 1085,
    resizeTimer,
    $menuBtnName = $('.jsSlidingName');
    
//WHAT IF

if ($windowWidth >= resizeBreakpoint) {
    
    menuOnHover();
   
} else {
    
    burgerOnClick();
};
    
    
//MENU ON HOVER FUNCTION  

function menuOnHover(){    

var $sidebarMenu = $('.jsNamesOnHover');
    
    $sidebarMenu.on('mouseenter', function(e){
        $menuBtnName.slideDown(200);
    });
    
    $sidebarMenu.on('mouseleave', function(e){
        $menuBtnName.slideUp(200);
    });
    
    $(window).on('resize', function(e) { // INSURANCE 


        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            $newWidth = $(window).width();
            if ($newWidth < resizeBreakpoint) {
                $sidebarMenu.off();
                $menuBtnName.show();
                $sidebarMenu.hide();
                burgerOnClick();
                
            }

        }, 250);

    });
      
};
    
//BURGER ON CLICK FUNCTION
    
function burgerOnClick(){
    
    var $burgerBtn = $('.jsShowHideBtn'),
    $sidebarMenuShowHide = $('.jsShowHide'),
    isClicked = false,
    $burgerIcon = $('.jsBurgerIcon'),
    $crossIcon = $('.jsCrossIcon');
        
    $burgerBtn.on('click', function(e){
       
        if(isClicked===false){
            $sidebarMenuShowHide.slideDown(200);
            $menuBtnName.show(200);
            $burgerIcon.hide();
            $crossIcon.fadeIn(200);
            isClicked = true;
            
            $sidebarMenuShowHide.on('click', function(e){
                $sidebarMenuShowHide.slideUp(200);
                $crossIcon.hide();
                $burgerIcon.fadeIn(200);
                isClicked = false;
            });
            
        } else {
            $sidebarMenuShowHide.slideUp(200);
            $crossIcon.hide();
            $burgerIcon.fadeIn(200);
            isClicked = false;
        }

    });
    
    
    $(window).on('resize', function(e) { // INSURANCE


        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            $newWidth = $(window).width();
            if ($newWidth > resizeBreakpoint) {
                $burgerBtn.off();
                $sidebarMenuShowHide.show();
                $menuBtnName.hide();
                $crossIcon.hide();
                $burgerIcon.show();
                menuOnHover();
                
            }

        }, 250);

    });
    
};
    
});