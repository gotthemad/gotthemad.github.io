$(function() {
    var slider = $('#slider'),
        slideShow = $('.slide-show'),
        slideCount = $('.single-slide').length,
        slideWidth = 100/slideCount,
        slideIndex = 0;
    slideShow.css({'width': (slideCount*100)+'%'});
    slideShow.find('.single-slide').each(function(index){
        $(this).css({'margin-left':(slideWidth*index)+'%'});
        $(this).css({'width':slideWidth});
        });
    
    $('.prev-slide').click(function(){
        event.preventDefault();
        console.log('prev');
        slide(slideIndex-1);
    })
    $('.next-slide').click(function(){
        event.preventDefault();
        console.log('next');
        slide(slideIndex+1);
    })

        function slide(newSlideIndex) {
        if (newSlideIndex > slideCount-1) {
            return;
        } else if (newSlideIndex < 0) {
            return;
        }
        var slideCaption = $('.slider-caption');
        slideCaption.hide();
        var marginLeft = newSlideIndex*(-100)+'%';
        slideShow.animate({'margin-left':marginLeft}, '2s', function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        })
    }
        
})