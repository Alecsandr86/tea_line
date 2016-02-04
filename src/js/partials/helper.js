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
            offset: 32
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


    $('select,input:checkbox').styler();



    /*******************************
    *       \СТИЛЕЗАЦИЯ ФОРМ\
    ******************************/





    /*******************************
     *       МЕНЮ
     ******************************/



    $('.list-product > li > a').bind('click',function(){
        $('.list-product > li').removeClass('active');
        $(this).parent().addClass('active');
    });



    $('.list-product-two > li > a').bind('click',function(){
        $('.list-product-two > li').removeClass('active');
        $(this).parent().addClass('active');
    });


    //
    //$('.list-product > li > a').bind('click',function(){
    //    $('.list-product > li').toggleClass('active');
    //});



    //$('.list-product-two > li > a').bind('click',function(){
    //    $('.list-product-two > li').removeClass('active');
    //    $(this).parent().addClass('active');
    //});
    //



    /*******************************
     *       /МЕНЮ/
     ******************************/

    /*******************************
     *       ПОЛЗУНОК
     ******************************/
    $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            var $container = $(this).parent();
            $container.find('.leftLabel').text(leftValue);
            $container.find('.rightLabel').text(rightValue);
        }
    });
    /*******************************
     *       /ПОЛЗУНОК/
     ******************************/

$('.filter-form').slideUp();
$('.btn-filter').bind('click', function(){
    $(this).toggleClass('active');
    $('.filter-form').slideToggle({
        easing:"easeInOutExpo",
        duration: 1000
    });
});

    //$('.filter-form').slideUp();
    $('.b-asid').bind('click', function(){
        $(this).toggleClass('active');
        $('.aside').slideToggle({
            easing:"easeInOutExpo",
            duration: 1000
        });
    });


$('.section-ico').bind('click',function(){
    $('.sort-visible li').removeClass('active');
    $(this).parent().addClass('active');
    $('.product-content').addClass('active');
});

    $('.tiles-ico').bind('click',function(){
        $('.sort-visible li').removeClass('active');
        $(this).parent().addClass('active');
        $('.product-content').removeClass('active');
    });














});
