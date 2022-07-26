new WOW().init();

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            // $("nav").addClass("round11");
            $("nav").addClass("theme-bg-color");
        } else {
            // $("nav").removeClass("round11");
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
    $(".add").each(function (i) {
        $(this).click(function () {
            var total = $(".num").eq(i).val();
            total++;
            $(".num").eq(i).val(total);
        });
    });
    $(".min").each(function (index) {
        $(this).click(function () {
            var total = $(".num").eq(index).val();
            var n = parseInt(total) - 1;
            if (n >= 1) {
                $(".num").eq(index).val(n);
            } else {
                $(".num").eq(index).val(0);
            }
        });
    });
    
    const datan = [0, 0, 0, 0, 0, 0];
    var allnum = 0;
    $(".addToCart").click(function () {
        allnum = 0;
        for (n = 0; n < 6; n++) {
            var t = $(".num").eq(n).val();
            $(".disnum").eq(n).html(t);
            allnum += parseInt(t);
            datan[n] = parseInt(t);
        }
    })

    $(".submit").click(function () {
        $(".num").val(0);
        $(".disnum").val(0);
    })
});

$("#gotop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    })
    return false;
})