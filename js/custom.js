$(function(){


// =============== MAIN PART START =============== //


    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling>50){
            $(".back-to-top").fadeIn(500);
        }
        else{
            $(".back-to-top").fadeOut(500);
        }
        if(scrolling>100){
            $("#menu").addClass('menu-background')
        }
        else{
            $("#menu").removeClass('menu-background')
        }
    });


    // =============== BACK TO TOP PART START =============== //

    $(".back-to-top").click(function(){
        $('html,body').animate({
            scrollTop:0
        },1750);
    });

    // =============== BACK TO TOP PART END =============== //


    // =============== PRELOADER PART START =============== //

    $(window).on('load',function(){
        $(".preloader").delay(500).fadeOut(800);
    });

    // =============== PRELOADER PART END =============== //


    // =============== SLICK SLIDER PART START =============== //
   
    $('.banner-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.next-banner',
        prevArrow: '.previous-banner',
        dots: true,
    });

    $('.testimonial-slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // =============== SLICK SLIDER PART END =============== //


    // =============== MIX IT UP PART START =============== //

    var mixer = mixitup('.portfolio-mix');

    // =============== MIX IT UP PART END =============== //


    // =============== SCROLL ANIMATION PART START =============== //
    
    var html_body = $('html, body');
    $('#menu .navbar-nav .nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });

    // =============== SCROLL ANIMATION PART END =============== //


    // =============== DARK THEME PART START =============== //

    var theme = document.getElementById("theme");

    theme.onclick = function(){
        document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")){
            $("#dark-mode").delay(100).fadeIn(150);
        }
        else{
            $("#dark-mode").delay(50).fadeOut(100);
        }
        if(document.body.classList.contains("dark-theme")){
            $("#light-mode").delay(50).fadeOut(100);
        }
        else{
            $("#light-mode").delay(100).fadeIn(150);
        }
    }

    // =============== DARK THEME PART END =============== //
    

// =============== MAIN PART END =============== //


});