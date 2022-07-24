$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("nav").addClass("round11");
            $("nav").addClass("theme-bg-color");
        } else {
            $("nav").removeClass("round11");
            $("nav").removeClass("theme-bg-color");
            $("nav").removeClass("bg-filter");
        }
    });
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            $("#navbarNav a").click(function () {
                $("#navbarNav").collapse('hide');
            });
            $(window).scroll(function () {
                $("#navbarNav").collapse('hide');
            });
        }
    })
});

$("#gotop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    })
    return false;
})