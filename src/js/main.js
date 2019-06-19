$(document).ready(function () {

    // $('.nav-link, .navbar-brand').click(function() {
    //     var sectionTo = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(sectionTo).offset().top
    //     }, 1000);
    // });

    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('.works__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: "<a class='prevButton pull-left'><i class=\"fas fa-chevron-left\"></i></a>",
        nextArrow: "<a class='nextButton pull-right'><i class=\"fas fa-chevron-right\"></a>"
    });


    $('.team__slider').slick({
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: "<a class='prevButton pull-left'><i class=\"fas fa-chevron-left\"></i></a>",
        nextArrow: "<a class='nextButton pull-right'><i class=\"fas fa-chevron-right\"></a>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


var scroll_start = 0;
var startchange = $('#startchange');
var offset = startchange.offset();
if (startchange.length) {
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $(".navbar").css('background-color', '#b2acc8');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
}

