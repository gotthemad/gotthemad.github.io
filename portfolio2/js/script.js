document.addEventListener('DOMContentLoaded', function(event) { //document ready
//global variables
//used in menuNames function
var menu = document.getElementsByClassName("jsNamesMouseEnter"),
    menuBar = menu[0],
    slidingNames = document.getElementsByClassName("jsSlidingName"),
//used in scrolling functions
    latestKnownScrollY = 0,
    ticking = false,
    windowHeight = window.innerHeight, //need to be update when window resize
    bgSwiched = false,
    mainCont = document.getElementsByClassName("jsSwichBg"),
    mainContent = mainCont[0],
    showHideElmts = document.getElementsByClassName("jsShowHideOnScroll"),
    parallaxElmts = document.getElementsByClassName("jsParallax"),
    parallaxElmt, speed, xPosition, yPosition, yPos, elmtOpacity, elmtOp,
    yStart = [-150,-110,-130,-100],
    aboutImages = document.getElementsByClassName("jsAboutImg");

//init
(function init() {
//    updatePosition(); //call when document is ready
    menuNames();
    
    window.addEventListener('scroll', function(event){ //call when scrolling
        scrollPos();
//        updatePosition();

    })
    
})()//end init

function menuNames(){
    
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
    
function scrollPos(){
    latestKnownScrollY = window.scrollY;
    requestTick();
}//end f onScroll
    
function requestTick(){
    if(!ticking) {
        requestAnimationFrame(updateOnScroll);
    }
    ticking = true;
}//end f requestTick  

function updateOnScroll() {
    ticking = false;
    var currentScrollY = latestKnownScrollY,
        scrollyVh = Math.round((currentScrollY * 100) / windowHeight);
    
    //show/hide logo and social icons 
    
        if(scrollyVh >= 75 && bgSwiched === false) {
//        mainContent.classList.add("jsSwichBg--fadeToBlack");
        bgSwiched = true;
            
        for (var i = 0; i < showHideElmts.length; i++) { //show logo and social icons
            showHideElmts[i].classList.add("jsShowHideOnScroll--visible");
        }
            
    } else if(scrollyVh < 75 && bgSwiched === true) {
//        mainContent.classList.remove("jsSwichBg--fadeToBlack");
        bgSwiched = false;
            
        for (var i = 0; i < showHideElmts.length; i++) { //hide logo and social icons
            showHideElmts[i].classList.remove("jsShowHideOnScroll--visible");
        }

    } // end if-else
    
        console.log("vh is "+scrollyVh);
    
     for (var i = 0; i < parallaxElmts.length ; i++) {

        yPos = -(yStart[i]*scrollyVh)/100+yStart[i];
        yPosition = Math.round(yPos);
         
        if(yPosition > 0){
            yPosition = 0;
        }
         
        elmtOpacity = (scrollyVh/80)-(0.25);
//        elmtOpacity = Math.round(elmtOp);
         
        console.log(elmtOpacity);
         
        parallaxElmt = parallaxElmts[i];        
        parallaxElmt.setAttribute('style', 'transform: translate3d(0,' + yPosition + '%, 0); opacity: '+ elmtOpacity +';');
    
    }//end for
    
    
  
}//end updateOnScroll
    
});//end document ready