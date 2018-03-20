$(document).ready(function() { 
    
    castParallax();
    
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

var $sidebarMenu = $('.jsNamesOnHover'),
    $sidebarBtns = $('.jsBtnsColor');
    
    $sidebarMenu.on('mouseenter', function(e){
        $menuBtnName.addClass('jsSlidingName--visible');
        $sidebarBtns.addClass('sidebar-btn--active');
        
    });
    
    $sidebarMenu.on('mouseleave', function(e){
        $menuBtnName.removeClass('jsSlidingName--visible');
        $sidebarBtns.removeClass('sidebar-btn--active');
    });
    
    $(window).on('resize', function(e) { //RESET SETTINGS IN CASE OF RESIZE WIDTH


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
    
    
    $(window).on('resize', function(e) { //RESET SETTINGS IN CASE OF RESIZE WIDTH


        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            $newWidth = $(window).width();
            if ($newWidth > resizeBreakpoint) {
                $burgerBtn.off();
                $sidebarMenuShowHide.off();
                $sidebarMenuShowHide.show();
                $menuBtnName.hide();
                $crossIcon.hide();
                $burgerIcon.show();
                menuOnHover();
                
            }

        }, 250);

    });
    
};
    
//SHOW SMALL LOGO AND CHANGE BACKGROUND ON SCROLL
var $showHideElmts = $('.jsShowHideOnScroll'),
    $mainContent = $('.jsBgOnScroll'),
    $jsAboutElmts = $('.jsPositionOnScroll'),
    $jsAboutSection =$('.jsAboutSection'),
    $jsSticky = $('.jsSticky'),
    $jsStickyActive = $('.jsSticky--active');
    
    
//    $(window).scroll(function(){
//        
//        var $scrollPosition = $(window).scrollTop(),
//            $windowHeight = $(window).height(),
//        
//            $jsAboutSection =$('.jsAboutSection'),
//            $sectionHeight = $jsAboutSection.height(),
//            $sH_proc = ((($sectionHeight)*100)/$windowHeight),
//            $sh_proc_r = Math.round($sH_proc),
            
////            console.log('dd ' +$sh_proc_r);
//        
//            $scrollToVh_d = (($scrollPosition)*100)/$windowHeight,
//            $scrollToVh_r = Math.round($scrollToVh_d);
//            
//            console.log($scrollToVh_r); 
//        
//            if($scrollToVh_r >= 50) {
//                console.log('50 now');
//                
//                $jsSticky.addClass('jsSticky--active');
//                
//            } else if ($scrollToVh_r < 50) {
//                console.log('less than 50');
//                $jsSticky.removeClass('jsSticky--active');
//            }
//            if($scrollToVh_r >= $sh_proc_r) {
//                console.log('true');
//                
//                $jsAboutSection.css({'height': $scrollToVh_r + 'vh'});
//            } else {
//                console.log('false');
//            }

        
            
//            $hun = (($jsAboutSection.height())*100)/$(window).height();
//        
//            console.log('hun is '+ $hun);
        
//        console.log('scroll position: '+$scrollPosition);
//        console.log('window height:'+$windowHeight);
//        console.log('About height is '+ $jsAboutSection.height());
        
//        if($scrollPosition > ($windowHeight)*(0.5)) {
//            $mainContent.addClass('main-content--newBgOnScroll');
//            $showHideElmts.addClass('jsShowHideOnScroll--visible');
//            
//        } else {
//            $mainContent.removeClass('main-content--newBgOnScroll');
//            $showHideElmts.removeClass('jsShowHideOnScroll--visible');
//            
//        }
  
//    });

    
//SECTION START CONTACT

var $contactBtns = $('.jsContactBtns'),
    $contactOnClick = $('.jsContactOnClick'),
    $sectionForm = $('.jsSectionForm'),
    $zoom = $('.jsZoom'),
    $cancel =$('.jsCancelBtn'),
    $headingStart = $('.jsHeading--start'),
    $headingContact = $('.jsHeading--contact');

    
    $contactOnClick.on('click', function(e){
        $contactBtns.fadeOut(300, function() {
            $sectionForm.slideDown(500, function() {
                $headingStart.fadeOut(500, function() {
                    $headingContact.fadeIn(500);
                });
            });
        });
    });
    
        $cancel.on('click', function(e){
            $sectionForm.slideUp(500, function() {
                $contactBtns.fadeIn(300);
                $headingContact.fadeOut(500, function() {
                    $headingStart.fadeIn(500);
                });
            });      
    });
    
    
function castParallax() {

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset,
            windowHeight = this.innerHeight,
            topVh = (top * 100) / windowHeight,

            layers = document.getElementsByClassName("jsParallax"),
            layer, speed, yPos;
        
		for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = ((speed/100)*topVh) -25;
            
                if (yPos > 0) { //maximum value is zero
                    var yPos = 0;
                } else if (yPos < -25) { // minimum value is -25
                    var yPos = -25;
                }
            
            console.log('ypos is: ' +yPos);
            
                if(i == 1 || i == 3){
                    var yPos = yPos*(-1);
                }
                        
            layer.setAttribute('style', 'transform: translate3d(0, ' + yPos + 'vh, 0)');
    
		}
        
        var mainContent = document.getElementsByClassName("jsSwichBg");
        if(yPos == 0){
            mainContent[0].classList.add("jsSwichBg--turquoise");    
        } else if(yPos != 0)
            mainContent[0].classList.remove("jsSwichBg--turquoise");   
	});


}    
    
});