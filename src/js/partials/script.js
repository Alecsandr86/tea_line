//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };


    //Асинхронная загрузка CSS
    //$("head").append("<link rel='stylesheet' type='text/css' href='css/style.min.css' />");
    //
    //function b(){
    //    var a=document.createElement("link");
    //    a.rel="stylesheet";
    //    a.href="/css/style.min.css";
    //    document.getElementsByTagName("head")[0].appendChild(a)
    //}
    //
    //var c=requestAnimationFrame||mozRequestAnimationFrame||webkitRequestAnimationFrame||msRequestAnimationFrame;
    //c?c(b):window.addEventListener("load",b);







    /*******************************
     *          WAYPOINTS
     *******************************/
    //$(window).scroll(function(){
    //    if ( $(this).scrollTop() > 991  ){
    //    }
    //});

    // кнопка
    var UpButton = $('.UP-button');

    UpButton.css('opacity', 0);


    var w = $(window).innerWidth(); // Получаем ширину окна
    if (w > 1029) {


    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


    UpButton.hover(function () {
        $(this).find('span').animate({'width': '70px','opacity':'1'},700);
    }, function () {
        $(this).find('span').animate({'width': '0','opacity':'0'},700);

    });
// окно
    $('#header')
        .waypoint(function(dir){
            if (dir === 'down') {
                $('.window').css({'visibility':'visible'});
            }
            else {
                $('.window').css({'visibility':'hidden'});

            }
        }, {
            offset: -100
        });



//// меню
    $('.bootom-nav')
        .waypoint(function(dire){
            if (dire === 'down') {
                $('.bootom-nav').addClass('fixed shadow-bottom');
            }
            else {
                $('.bootom-nav').removeClass('fixed shadow-bottom');

            }
        }, {
            offset: 40
        });

    $('.nav-tea').waypoint(function(dires){
        if (dires === 'down') {
            $(this.element).addClass('fixeds');

        }
        else {
            $(this.element).removeClass('fixeds');

        }
    }, {
        offset: 80
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


//// меню
    $('.nav-big').waypoint(function (directi) {
        if (directi === 'down') {
            $('.nav-big').addClass('fixed-nav-big shadow-bottom duration-1 animated fadeIn').one(animationEnd,function(){
                $(this).removeClass('animated fadeIn');
            });
        }
        else {
            $('.nav-big').removeClass('fixed-nav-big duration-1 shadow-bottom');
        }
    }, {
        offset: "0"
    });

    }


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
    *       СТИЛЕЗАЦИЯ ФОРМ
     ******************************/


    $(".style,input:checkbox ,input[type='number']").styler({
        selectSearch: true
    });

    $('.select-cast-but').fancyspinbox({
        cycle: true,
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




    $('.hit-ico,.link-cho').bind('mouseenter mouseleave',function(){
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




    $('.button-gender a').bind('click',function(){
        $('.button-gender a').removeClass('active');
        $(this).addClass('active');
    });

    $('.but-sett-big a').bind('click', function(){
        $(this).parent('.but-sett-big').find('a').removeClass('active');
        $(this).addClass('active');
    });
    $('.but-sett-mini a').bind('click', function(){
        $(this).parent('.but-sett-mini').find('a').removeClass('active');
        $(this).addClass('active');
    });

    /*******************************
     *       /МЕНЮ/
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

    $('.vse').bind('click',function(){
        $(this).toggleClass('active');
        $(this).parents('.top-form').find('.dropdown-pages').slideToggle({
            easing:'jswing',
            duration: 1000
        });
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

    $(".link").fancybox({
        padding:0,
        closeBtn:false,
        'scrolling'   : 'visible',
        helpers: {
            overlay: {
                locked: true
            },
            title : {
                type : 'float'
            }
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

    /*******************************
     *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
     *******************************/
    $('a[href^="#h"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},2000,"easeInOutExpo");
        return false;
    });

    /*******************************
     *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
     *******************************/

    /*******************************
     *       ПОЛЗУНОК
     ******************************/
    $(".nstSlider").nstSlider({
        "crossable_handles": false,
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


});

/************************
 *       preloader
 ************************/
$(window).on('load', function () {
    var $preloader = $('#loading'),
        $spinner   = $preloader.find('#loading-center');
    $spinner.fadeOut();
    $preloader.fadeOut('slow');
});

/************************
 *       /preloader/
 ************************/