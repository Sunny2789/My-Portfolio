// Initiazing AOS
AOS.init();

// For Navbar and PageUp Arrow
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navigation').addClass("sticky");
        }
        else {
            $('.navigation').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.page-up-arrow').addClass("show");
        }
        else {
            $('.page-up-arrow').removeClass("show");
        }
    });

    // slide-up script
    $('.page-up-arrow').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // Menu navigation script
    $('.nav-bars').click(function () {
        $('.navs ul').toggleClass("show");

        if ($('.navs ul').hasClass("show") == true) {
            $('#close-bar').css("display", "block");
            $('#menu-bar').css("display", "none");
        }
        else if ($('.nav ul').hasClass("show") == false) {
            $('#menu-bar').css("display", "block");
            $('#close-bar').css("display", "none");
        }

        $('.nav-item a').click(function () {
            if ($('.navs ul').hasClass("show") == true) {
                $('.navs ul').removeClass("show");
                $('#close-bar').css("display", "none");
                $('#menu-bar').css("display", "block");
            }
        });
    });
});

