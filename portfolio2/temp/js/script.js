var latestKnownScrollY = 0,
    ticking = false,
    logoPixels = document.getElementById('fuckoff');
    
function onScroll(){
    latestKnownScrollY = window.scrollY;
    requestTick();  
}
    
window.addEventListener('scroll', onScroll, false);


function requestTick(){
    if(!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}
    
function update() {
    ticking = false;
    var currentScrollY = latestKnownScrollY;
//    yPosition = currentScrollY/10;
    console.log('i dont know what i am doing and Y-pos is '+currentScrollY);
    
    logoPixels.setAttribute('style', 'transform: translate3d(0, ' + currentScrollY+ '%, 0)');
    
}

