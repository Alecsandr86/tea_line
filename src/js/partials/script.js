//Так приятней :)
//window.log = function(param){
//    console.log(param);
//};
$(document).ready(function(){


    /*******************************
     *          WAYPOINTS
     *******************************/
    //$(window).scroll(function(){
    //    if ( $(this).scrollTop() > 991  ){
    //    }
    //});

$(document).ready(function(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

// окно
    $('#header')
        .waypoint(function(dir){
            if (dir === 'down') {
                $('.window').css({'visibility':'visible'}).addClass('animated fadeInLeft').one(animationEnd,function(){
                    $(this).removeClass('animated fadeInLeft');
                });
            }
            else {
                $('.window').addClass('animated fadeOutLeft').one(animationEnd,function(){
                    $(this).removeClass('animated fadeOutLeft').css({'visibility':'hidden'});
                });

            }
        }, {
            offset: -100
        });

});

$(document).ready(function(){
// меню
    $('.bootom-nav')
        .waypoint(function(dire){
            if (dire === 'down') {
                $('.bootom-nav').addClass('fixed shadow-bottom');
            }
            else {
                $('.bootom-nav').removeClass('fixed shadow-bottom');

            }
        }, {
            offset: 32
        });

    $('.nav-tea').waypoint(function(dires){
        if (dires === 'down') {
            $(this.element).addClass('fixeds');

        }
        else {
            $(this.element).removeClass('fixeds');

        }
    }, {
        offset: 70
    });

});

$(document).ready(function(){

    // кнопка
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
        offset: '-15%'
    });



});

    /*******************************
     *       \WAYPOINTS\
     *******************************/

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

    var slidDouble = new Swiper('#slid-double', {

        nextButton: '.slid-next',
        prevButton: '.slid-prev',
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10
    });

    var slidTovar = new Swiper('#slid-tovar', {
        nextButton: '.slid-next-1',
        prevButton: '.slid-prev-1',
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 10,


    });


    /********************************
    *   / Слайдер-Карусель Swiper/
    ********************************/


    /*******************************
    *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
    *******************************/
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top},2000,"easeInOutExpo");
            return false;
        });

    /*******************************
     *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
    *******************************/






    /*******************************
    *       СТИЛЕЗАЦИЯ ФОРМ
     ******************************/


    $("select,input:checkbox ,input[type='number']").styler({
        selectSearch: true
    });



    /*******************************
    *       \СТИЛЕЗАЦИЯ ФОРМ\
    ******************************/





    /*******************************
     *       МЕНЮ
     ******************************/


    $('.list-product > li > a').bind('click',function(){
        $(this).parent().toggleClass('active');
    });



    $('.list-product-two > li > a').bind('click',function(){
        $(this).parent().toggleClass('active');
    });




    $('.hit-ico').bind('mouseenter mouseleave',function(){
       $(this).prev('.hit-form').fadeToggle(500)
    });


    $('.list-desires').hover(function(){
        $(this).find('span').animate({'width': '97px','opacity':'1'},700,'jswing')
    },function(){
        $(this).find('span').animate({'width':'0','opacity':'0'},700,'jswing')
    });

    $('.feed-content .mag-big').css({'display':'none'});
    $('#magazine-list li').find('.section-ico').bind('click', function(){
        $('.mag-big').css({'display':'block'});
        $('.magazi-table').css({'display':'none'});
    });
    $('#magazine-list li').find('.tiles-ico').bind('click', function(){
        $('.magazi-table').css({'display':'block'});
        $('.mag-big').css({'display':'none'});
    });




    $('.button-gender button').bind('click',function(){
        $('.button-gender button').removeClass('active');
        $(this).addClass('active');
    });

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

//$('.filter-form').slideUp();
$('.btn-filter').bind('click', function(){
    $(this).toggleClass('active');
    $('#filter-form').slideToggle({
        easing:'jswing',
        duration: 1000
    });
});

    $('.btn-filter-2').bind('click', function(){
        $(this).toggleClass('active');
        $('#filter-form-2').slideToggle({
            easing:'jswing',
            duration: 1000
        });
    });

    $('.b-asid').bind('click', function(){
        $(this).toggleClass('active');
        $('.aside').slideToggle({
            easing:'jswing',
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

    /*******************************
     *       fancybox
     ******************************/
    $(".fancybox").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            },
            buttons	: {}
        }
    });

    /*******************************
     *       /fancybox/
     ******************************/

    /*******************************
     *            tab
     ******************************/
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    $('.cabinet-big-nav ul').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.container').find('div.wish-content').removeClass('active').eq($(this).index()).addClass('active');
    });
    /*******************************
     *           /tab/
     ******************************/

    /********************************
     *           Аккордеона
     ********************************/
    $(".content-accord").hide().prev().click(function () {
        $(this).parents(".accordion").find(".content-accord").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
    /********************************
     *           \Аккордеона\
     ********************************/
});

