$(document).ready(function(){

    /* Fixed Header */

    $(window).on("scroll",function(){
        var wn = $(window).scrollTop();
        if(wn > 120){
            $(".navbar").css("background","rgba(98,28,24,1)");
        } else {
            $(".navbar").css("background","");
        }
    });

    /* Smooth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({

            scrollTop: blockOffset
        }, 1000);
    });

    /* Showed hidden text */


    $('.blog_button').click(function(){
        $(this).prev('.blog_text_full').slideToggle(300);
        return false;
    });

/* Slider */

    $("#team").slick({
        slidesToShow: 4,
        slidesToScroll:4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings:  {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    /* Tabs */

    $('.list-inline-item').not('.active').click(function(){
        var index = $(this).index();
        var content = $('.works').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.works').css('display', 'none').eq(index).css('display', 'block');
    })
    $('.list-inline-item:first').addClass('active');
    $('.works:first').css('display', 'block');

});

