$(function(){
    "use strict";
        $('.toggle_btn').on('click',function (){
        $('.toggle_btn').toggleClass('toggle_btn_active');
        $('.nav').toggleClass('nav_active');
    });
});

$(window).on('load', function() {
    $('.img_head').addClass('img_head_active');
    $('.head_title').addClass('head_title_active')
});