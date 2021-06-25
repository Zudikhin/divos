$(document).ready(function () {
    "use strict";


    $(".header_dropdown_switcher").click(function() {
        $("body").toggleClass("dark_theme");
    });

    $(".header_content_switch").click(function() {
        $("body").toggleClass("dark_theme");
    });

    $(".header_content_btn").click(function() {
        $(".header_dropdown").toggleClass("active");
        $(".back_modal").toggleClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".header_dropdown").removeClass("active");
    });

    $(".example_content_list_item").each(function() {
        var width = $(this).width();
        $(this).find(".example_content_list_item_img").css("height", width + "px");
    });

    $(".blog_content_title_view_tiles").click(function() {
        $(".blog_content").removeClass("tiles");
    });

    $(".blog_content_title_view_big").click(function() {
        $(".blog_content").addClass("tiles");

        if($(".blog_content").hasClass("tiles")) {
            var lengthBlock = $(".blog_content_list_item").length;
            if(lengthBlock == 8) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
                $(".blog_content_list_item:eq(2)").addClass("long");
                $(".blog_content_list_item:eq(3)").addClass("long");
                $(".blog_content_list_item:eq(7)").addClass("long");
                $(".blog_content_list_item:eq(7)").addClass("last_item");
            } else if(lengthBlock == 7) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
                $(".blog_content_list_item:eq(2)").addClass("long");
                $(".blog_content_list_item:eq(3)").addClass("long");
                $(".blog_content_list_item:eq(5)").addClass("big_wide");
                $(".blog_content_list_item:eq(6)").addClass("long");
                $(".blog_content_list_item:eq(6)").addClass("last_item");
            } else if(lengthBlock == 6) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
                $(".blog_content_list_item:eq(4)").addClass("long");
                $(".blog_content_list_item:eq(5)").addClass("big_wide");
                $(".blog_content_list_item:eq(5)").addClass("last_item");
            } else if(lengthBlock == 5) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
            } else if(lengthBlock == 4) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
                $(".blog_content_list_item:eq(3)").addClass("big_wide");
            } else if(lengthBlock == 3) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
                $(".blog_content_list_item:eq(1)").addClass("long");
                $(".blog_content_list_item:eq(2)").addClass("big_wide");
                $(".blog_content_list_item:eq(2)").addClass("last_item");
            } else if(lengthBlock == 2) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
            } else if(lengthBlock == 1) {
                $(".blog_content_list_item:eq(0)").addClass("big_wide");
            }
        }
    });

    $('.home_slider_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        dots: true,
        arrows: false,
        fade: true
    });

    $('.articles_content_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $('.articles_content_btns_prev'),
        nextArrow: $('.articles_content_btns_next'),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  fade: true
                }
              }
          ]
    });

    // console.log($(".blog_content_list_item").length);

    if($(window).width() <= 767) {
        $(".activity_content_anchors button").click(function() {
            var attr = $(this).attr("data-id");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + attr).offset().top - 65
            }, 1500);
        });
    } else if ($(window).width() > 767 && $(window).width() < 1199) {
        $(".activity_content_anchors button").click(function() {
            var attr = $(this).attr("data-id");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + attr).offset().top - 125
            }, 1500);
        });
    } else {
        $(".activity_content_anchors button").click(function() {
            var attr = $(this).attr("data-id");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + attr).offset().top
            }, 1500);
        });
     }


});