$(document).ready(function() {

//variables
var bgSwiched = false;
var parallaxElmts = document.getElementsByClassName("jsParallax");
var windowHeight = window.innerHeight;
    
var showHideElmts = document.getElementsByClassName("jsShowHideOnScroll");
var mainContent = document.getElementsByClassName("jsSwichBg");
    
var progressBars = document.getElementsByClassName("jsProgressBar");
var scaleLines = document.getElementsByClassName("jsScaleLine");

    
(function init() { 
    //call functions when document is ready
    showHide();
    position();
    skillsBars();
    menuNames();
    burgerOnClick();
    
    window.addEventListener("scroll", function(event){ //call functions when scrolling
        showHide();
        position();
        skillsBars();
    }); //end scroll event
})()
    
/////////////////////////////////////////////////////////
    
//GLOBAL VARIABLES
    
//var $windowWidth = $(window).width(),
//    resizeBreakpoint = 1085,
//    resizeTimer;

//SECTION START CONTACT

//var $contactBtns = $('.jsContactBtns'),
//    $contactOnClick = $('.jsContactOnClick'),
//    $sectionForm = $('.jsSectionForm'),
//    $zoom = $('.jsZoom'),
//    $cancel =$('.jsCancelBtn'),
//    $headingStart = $('.jsHeading--start'),
//    $headingContact = $('.jsHeading--contact');
//
//    
//    $contactOnClick.on('click', function(e){
//        $contactBtns.fadeOut(300, function() {
//            $sectionForm.slideDown(500, function() {
//                $headingStart.fadeOut(500, function() {
//                    $headingContact.fadeIn(500);
//                });
//            });
//        });
//    });
//    
//        $cancel.on('click', function(e){
//            $sectionForm.slideUp(500, function() {
//                $contactBtns.fadeIn(300);
//                $headingContact.fadeOut(500, function() {
//                    $headingStart.fadeIn(500);
//                });
//            });      
//    });

    
///////////////////////////////////////////////////////////////////////

function burgerOnClick(){
    var burgers = document.getElementsByClassName("jsBurger"),
        burger = burgers[0],
        navigations = document.getElementsByClassName("jsBurgerClick"),
        navigation = navigations[0],
        burgerIsClicked = false;
    
    burger.addEventListener("click", function(e){
        
        if(burgerIsClicked === false){
            navigation.classList.add("jsBurgerClick--active");
            burgerIsClicked = true;
            
        } else {
            navigation.classList.remove("jsBurgerClick--active");
            burgerIsClicked = false;       
        }
    });
            
}//end f burgerOnClick
    

//show menu buttons names on mouseenter
function menuNames(){
    var menu = document.getElementsByClassName("jsNamesMouseEnter"),
        menuBar = menu[0],
        slidingNames = document.getElementsByClassName("jsSlidingName");
    
    menuBar.addEventListener("mouseenter", menuMouseEnter);
    menuBar.addEventListener("mouseleave", menuMouseLeave);
    
    function menuMouseEnter(){
        for(var i = 0; i < slidingNames.length; i++){
            var slidingName = slidingNames[i];
            slidingName.classList.add("jsSlidingName--active");
        }
    }
    
    function menuMouseLeave(){
        for(var i = 0; i < slidingNames.length; i++){
            var slidingName = slidingNames[i];
            slidingName.classList.remove("jsSlidingName--active");
        }
    }   
}//end f menuNames

//scroll position in Vh    
//function scrollPosition(){
//    
//    var top = this.pageYOffset,
//        topVh = (top * 100) / windowHeight;
//    
//    return topVh;
//}


    
//this function is setting position of elements according to actual scroll position
function position(){
        
    var topVh = scrollPosition(),
        parallaxElmt, speed, yPosition;

        
    for (var i = 0; i < parallaxElmts.length; i++) {
            parallaxElmt = parallaxElmts[i];
            speed = parallaxElmt.getAttribute('data-speed');
            yPosition = ((speed/100)*topVh) -50;
            
            if (yPosition > 0) { //maximum value is zero
                yPosition = 0;
            } else if (yPosition < -50) { // minimum value is -50
                yPosition = -50;
            }
            
            if(i == 0 || i == 2){
                yPosition = yPosition*(-1);
            }
                        
            parallaxElmt.setAttribute('style', 'transform: translate3d(0, ' + yPosition + '%, 0)');
    
    }//end for

}//end f position


//show and hide elements according to scroll position
function showHide(){
    
    var topVh = scrollPosition();

        
    if(topVh >= 75 && bgSwiched === false) {
        mainContent[0].classList.add("jsSwichBg--fadeToBlack");
        bgSwiched = true;
            
        for (var i = 0; i < showHideElmts.length; i++) { //show logo and social icons
            showHideElmts[i].classList.add("jsShowHideOnScroll--visible");
        }
            
    } else if(topVh < 75 && bgSwiched === true) {
        mainContent[0].classList.remove("jsSwichBg--fadeToBlack");
        bgSwiched = false;
            
        for (var i = 0; i < showHideElmts.length; i++) { //hide logo and social icons
            showHideElmts[i].classList.remove("jsShowHideOnScroll--visible");
        }

    } // end if-else
}//end f showHide

//animation of progress bars according to scroll position    
function skillsBars(){
    
    var topVh = scrollPosition();
    
    if(topVh >= 150) {
        for(var i = 0; i < progressBars.length; i++){
           
//        setTimeout(function(){
//            console.log('hit')
            var progressBar = progressBars[i],
                progress = progressBar.getAttribute("progress");
            progressBar.setAttribute("style","height:"+progress+"%;"); 
//        }, 5000);
//            progressBar.setAttribute("style","height:"+progress+"%;");
        }
        
    } else if(topVh < 150){
                for(var i = 0; i < progressBars.length; i++){
            var progressBar = progressBars[i],
                progress = progressBar.getAttribute("progress");
            
            progressBar.removeAttribute("style");
        }    
    }
  

    
    for(var i = 0; i < progressBars.length; i++){
        var progressBar = progressBars[i];
        var progress = progressBar.getAttribute("progress");
        console.log('progressing'+i);
        progressBar.addEventListener("mouseenter", function(e){
            
            console.log('i jest tu: '+i);
        })
    }
    
}//end f skillsBars
    
});//end document ready