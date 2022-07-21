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