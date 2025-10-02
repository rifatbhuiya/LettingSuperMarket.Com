$(function () {
    "use-strict";

    // Shrink nav
    function shrinkNav() {
        $(window).on('scroll', function () {
            let scrolling = $(this).scrollTop();

            if (scrolling > 50 && !$('.main-header').hasClass('fixed-header')) {
                $('.main-header').addClass('fixed-header');
            } else if (scrolling <= 50 && $('.main-header').hasClass('fixed-header')) {
                $('.main-header').removeClass('fixed-header');
            }
        });
    }
    shrinkNav();
    
    // Back to top
    function btt() {
        $(window).on('load', function(){
            $(".btt").hide();
        });

        $(window).on('scroll', function () {
            let scrolling = $(this).scrollTop();

            if (scrolling > 120) {
                $('.btt').show(500);
            } else {
                $('.btt').hide(500);
            }
        });

        $('.btt').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }
    btt();

    // Current year
    $(".currentYear").text(new Date().getFullYear());

    function animatedTitle() {
        // Register plugin
        gsap.registerPlugin(SplitText);
    
        // Split the title into characters
        const split = new SplitText(".animated-title", { type: "chars" });
    
        // Animate characters
        gsap.from(split.chars, {
            duration: 0.8,
            opacity: 0,
            y: 40,
            stagger: 0.05,
            ease: "back.out(1.7)"
        });
    }
    animatedTitle();
})();