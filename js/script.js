
$(document).ready(function(){

    $(window).on('load', function () {
    $('.preloader').toggleClass('end');
    $('body').removeClass('prel');
    $('header').toggleClass('preload_head');
});
    // ------------------отмена случайного перехода-------------------------

    'use strict';

    // ------------------меню для мобильных-------------------------
        
        $('.menu_btn').on('click', function() {
            $(this).toggleClass('menu_btn_active');
            $('.nav_list').toggleClass('active');
        });

        
        $('.nav_list').click( function(){
            $('.nav_list').removeClass('active');
            $('.menu_btn').removeClass('menu_btn_active');
        });



  // ------------------плавный скролинг-------------------------

        $('a[href^="#"]').click(function(){
            let target = $(this).attr('href');
            $('html, body').animate({
                scrollTop:$(target).offset().top
            },
                800		  
            );
        });

        $('#btn_puls').click(function(){
        $('html, body').animate(
            {
            scrollTop:$('#my_work').offset().top
            },
        
            800		  
        );
    });
  // ------------------вкладки-действие-------------------------

    $('#but button').click(function(){
        var get_id = this.id;
        var get_toggle = $('.posts .' + get_id);

            $('.post').not(get_toggle).hide(500);
            get_toggle.show(500);
        });

  // ------------------вкладки-------------------------

    $('#css').click(function(){
        $(this).toggleClass('active_btn');
        $('#website').removeClass('active_btn')
        });
        
    $('#website').click(function(){
        $(this).toggleClass('active_btn');
        $('#css').removeClass('active_btn')
        });


});
