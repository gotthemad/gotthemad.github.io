$(document).ready(function() { 
    
//GLOBAL VARIABLES
var $windowWidth = $(window).width();  
    
//CALLING FUNCTIONS
menuOnHover();
burgerOnClick();


    
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
};
    
});