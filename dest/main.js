// ---slider---
let $carousel = $(".slider__item-wrap");
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 2000,
    on: {
        change: function(index) {
            let number = $('.paging .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0) + "/");
            updateStatus();
        }
    }
});

$(window).on('load', function() {
    updateStatus();
});
var flkty = new Flickity('.slider__item-wrap');
var carouselStatus = $('.number__all');

function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.text((flkty.slides.length).toString().padStart(2, 0));
}

//mission
let $carousel1 = $(".mission__slider");
let mission = $('.mission');
$carousel1.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: function(index) {
            let contentText = $('.content__text');
            contentText.removeClass("active");
            contentText.eq(index).addClass("active");
            setTimeout(function() {
                mission.addClass("active");
            }, 500)
            mission.removeClass("active");
        }
    }
});
// // previous
$(".mission__control .--prev").on("click", function() {
    $carousel1.flickity('previous');
});
// // next
$(".mission__control .--next").on("click", function() {
    $carousel1.flickity('next');
});

// change Header background
function changeHeaderBg() {
    let slider = $('.slider');
    let header = $('header');
    $(window).scroll(function() {
        let pageYOffset = $(this).scrollTop();
        let heightSlider = $(slider).height();
        if (pageYOffset > heightSlider - header.height()) {
            $(header).addClass("active");
        } else {
            $(header).removeClass("active");
        }
    });
}

changeHeaderBg();

//menu toggle
let btnMenu = $(".right .btn__menu");
let minMenu = $(".nav");
btnMenu.click(function() {
    btnMenu.toggleClass("clicked");
    if ($(".btn__menu:contains(clicked)")) {
        minMenu.toggleClass("active");
        console.log("a");
    }
});

//slider hot product
let $carousel2 = $(".hot__list");
$(window).resize(function() {
    let width = $(window).width();
    if (width < 990) {
        //     $carousel2.flickity({
        //         cellAlign: 'left',
        //         contain: 3,
        //         wrapAround: true,
        //         prevNextButtons: false,
        //         pageDots: false,
        //         freeScroll: true,
        //         groupCells: 1

        //     });
        $($carousel2).slick({
            infinite: true,
            slidesToShow: 1,
            centerPadding: '100px',
            slidesToScroll: 3,
            centerMode: true,
            prevArrow: false,
            nextArrow: false
        });
    } else {
        $carousel2.slick('unslick');
    }
});