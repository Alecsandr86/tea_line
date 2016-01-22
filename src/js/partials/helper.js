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

});