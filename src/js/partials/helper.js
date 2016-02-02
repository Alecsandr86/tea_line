//Так приятней :)
//window.log = function(param){
//    console.log(param);
//};
$(document).ready(function(){



/********************************
*   Слайдер-Карусель Swiper
********************************/

    var slider1 = '#slid-1';
    var slider2 = '#slid-2';
    var slider3 = '#slid-3';



    var mySwiper1 = new Swiper (slider1, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        //autoplay: 1000,
        followFinger:true,

        // If we need pagination
        pagination: '.slid-1-pages',
        paginationClickable: true,

        mousewheelControl: true

    });

    var mySwiper2 = new Swiper (slider2, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        //autoplay: 1000,
        followFinger:true,

        // If we need pagination
        pagination: '.slid-2-pages',
        paginationClickable: true,

        mousewheelControl: true

    });

    var mySwiper3 = new Swiper (slider3, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        //autoplay: 1000,
        followFinger:true,

        // If we need pagination
        pagination: '.slid-3-pages',
        paginationClickable: true,

        mousewheelControl: true

    });



/********************************
*   / Слайдер-Карусель Swiper/
********************************/


/*******************************
*   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
*******************************/
    $('a[href^="#"]').click(function(){
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},2000,"easeInOutExpo");
        return false;
    });

/*******************************
 *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
*******************************/




/*******************************
*          WAYPOINTS
*******************************/
//$(window).scroll(function(){
//    if ( $(this).scrollTop() > 991  ){
//    }
//});



    $('.bootom-nav')
        .waypoint(function(direction){
            if (direction === 'down') {
                $('.bootom-nav').addClass('fixed shadow-bottom');
            }
            else {
                $('.bootom-nav').removeClass('fixed shadow-bottom');
            }
        }, {
            offset: 0
        });

    var UpButton = $('.up-button');

    UpButton.css('opacity', 0);

        UpButton.hover(function () {
            $(this).find('span').animate({'width': '70px','opacity':'1'},700);
        }, function () {
            $(this).find('span').animate({'width': '0','opacity':'0'},700);

        });

        $('#header').waypoint(function(direction){
            if (direction === 'down') {
                UpButton.removeClass('animated fadeOutDown').css('opacity', 0);
                UpButton.css('opacity', 1).addClass('animated fadeInUp');
            }
            else {
                UpButton.removeClass('animated fadeInUp');
                UpButton.addClass('animated fadeOutDown').css('opacity', 0);
            }
        }, {
            offset: '-100%'
        });







/*******************************
*       \WAYPOINTS\
*******************************/


/*******************************
*       СТИЛЕЗАЦИЯ ФОРМ
 ******************************/


$('select').styler();



/*******************************
*       \СТИЛЕЗАЦИЯ ФОРМ\
******************************/




});
