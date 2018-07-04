 var pathObj = {
    "svg-animation": {
        "strokepath": [
            {
                "path": "M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431    C153.821,303.954,153.821,358.226,153.821,358.226z",
                "duration": 600
            },
            {
                "path": "M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z",
                "duration": 600
            },
            {
                "path": "M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183    L348.843,358.226z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 503,
            "height": 503
        }
    }
}; 
 
 const initPageSlider = () =>{
    const slider = $('.carousel');
    let wheel = false;
    slider.slick({
        vertical: true,
        autoplay: false,
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        dotsClass: 'dots',
        infinite: false,
    });

    slider.mousewheel((e) =>{
        e.preventDefault();
        if(e.deltaY < 0){
            slider.slick('slickNext'); 
        }
        else{
            slider.slick('slickPrev');
        }
    });

    slider.swipe({
        swipe: (e, direction, distance, duration, fingerCount, fingerData) => {
            if(direction == "up"){
                slider.slick('slickNext');
            }
            else{
                slider.slick('slickPrev');
            }
        }, threshold: 20
    });

 };

 $(document).ready(function(){ 
    initPageSlider();
    const menu = $('.menu');
    const MenuShow = $('#menu__show');
    const MenuItem = $('.menu__link');
     $('#svg-animation').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 20,
        "strokeColor": "white"
    }).lazylinepainter('paint'); 
    MenuShow.click(function(){
        if(menu.is(':visible')){
            menu.hide();
            $('.hamburger').removeClass('hamburger__active');
        }
        else{
            menu.show();
            $('.hamburger').addClass('hamburger__active');
        }
    });
    MenuItem.click(function(){
        menu.hide();
        $('.hamburger').removeClass('hamburger__active');
        $('.carousel').slick('slickGoTo', this.name-1);
    });

     let html = $('.html'),
         css  = $('.css'),
         js   = $('.js'),
         vue  = $('.vue'),
         avocode = $('.avocode'),
         jquery = $('.jquery');
    progressBarUpdate(90, 100, html);
    progressBarUpdate(80, 100, css);
    progressBarUpdate(70, 100, js);
    progressBarUpdate(20, 100, vue);
    progressBarUpdate(90, 100, avocode);
    progressBarUpdate(70, 100, jquery);

    $('.category__item a').click(function(){
        if($(this).attr('href') != '#All'){
            console.log($(this).attr('href'));
            $(this).parents('.portfolio__content').find('.works__item').addClass('hide');
            $(this).parent().siblings().removeClass('active');
            var id = $(this).attr('href');
            $(id).removeClass('hide');
            $(this).parent().addClass('active');
            return false
        }
        else{
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');

            $('#Wordpress').removeClass('hide');
            $('#Landing').removeClass('hide');
        }
    });
 });


 function rotate(element, degree) {
    element.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
    });
}

function progressBarUpdate(x, outOf, elem) {
    var firstHalfAngle = 180;
    var secondHalfAngle = 0;

    // caluclate the angle
    var drawAngle = x / outOf * 360;

    // calculate the angle to be displayed if each half
    if (drawAngle <= 180) {
        firstHalfAngle = drawAngle;
    } else {
        secondHalfAngle = drawAngle - 180;
    }

    // set the transition
    rotate(elem.find(".sector__right-slice"), firstHalfAngle);
    rotate(elem.find(".sector__left-slice"), secondHalfAngle);

    // set the values on the text
    //elem.find(".sector__status").html(x + "<span>%</span>");
}