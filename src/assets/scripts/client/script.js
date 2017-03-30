$(document).ready(function() {

    var wrapper = document.getElementsByClassName('wrapper')[0];
    var btn = document.getElementsByClassName('menu-toggle')[0];
    var drawer = document.getElementsByClassName('nav--left')[0];

    btn.addEventListener('click', function(e) {
        drawer.classList.toggle('nav--active');
        e.stopPropagation();
    });

    function checkEvent(e) {
        if (drawer.classList.contains('nav--active')) {
            var target = e.target;
            if (target === drawer /*|| drawer.contains(target)*/ ) {
                return
            }
            drawer.classList.toggle('nav--active');
        }
    }
    wrapper.addEventListener('click', checkEvent, false);
    wrapper.addEventListener('touchmove', checkEvent, false);
    drawer.addEventListener('touchmove', function() {
        drawer.classList.toggle('nav--active');
    });




    // slide toggle handling
    function getScrollBarWidth() {
        var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
            widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    };
    // dropdown
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function() { $('.header').css('padding-right', getScrollBarWidth() + "px"); },
            close: function() { $('.header').css('padding-right', 0); }
        }
    });
    $('.badge--less').magnificPopup({
        type: 'inline',

        // fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: true,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function() { $('.header').css('padding-right', getScrollBarWidth() + "px"); },
            close: function() { $('.header').css('padding-right', 0); }
        }
    });
    $('.badge--more').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function() { $('.header').css('padding-right', getScrollBarWidth() + "px"); },
            close: function() { $('.header').css('padding-right', 0); }
        }
    });

    // dropdown

    $(".faq__qw").on('click', function(e) {
        var el = $(this).parent();
        el.find(".faq__answer").slideToggle();
        el.find(".icon-close-wrapper").toggle();
        el.find(".icon-toggle-wrapper").toggle();
        $(this).toggleClass('faq__qw-bold');
    });


    $('#info-slider').slick({
        speed: 1500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }

            }, {
                breakpoint: 720,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }

            }]
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
    });


    var paragraph = $('.feedback-slider .item .content .text__content');
    paragraph.each(function(i) {

        if ($(this).height() > 90) {
            $(this).parent().parent().find('.learn-more').toggleClass('learn-more--visible');
        }
    });

    

    $('.item .learn-more').on('click', function() {
        var text = 'Read more';
        $(this).toggleClass('learn-more--active');
        if ($(this).hasClass('learn-more--active')) {
            $(this).text('Read less');
        } else {
            $(this).text(text);
        }
        var parent = $(this).parent();
        parent.toggleClass('item--active');
        parent.find('.text').toggleClass('text--active');
    })

    $("#feedback-slider").slick({
        speed: 1500,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        centerMode: true,
        responsiveHeight: true,
        variableWidth: false,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 1

            }

        }]

    });

    // form validation
    $('.input-date').datepicker();

    $.validator.addMethod("eitherEmailPhone", function(value, element) {
        isPhone = (this.optional(element) || /^\d+$/.test(value)) && this.getLength($.trim(value), element) <= 12 && this.getLength($.trim(value), element) >= 11;
        isEmail = this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);

        return isPhone || isEmail;

    }, "Please enter either phone or e-mail");

    $("#stay-in-touch").validate({
        debug: true,
        rules: {
            name: {
                required: true,

            },
            staycontact: { eitherEmailPhone: true },
            stayquestion: {
                required: true
            }
        },
        messages: {
            name: "Please specify your name.",
            stayquestion: "Please enter your question."

        }
    });

    $.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z ]+$/);
    });
    $.validator.addMethod("dateValidate", function(value, element) {
        var currdate = new Date($('.input-date').val());
        var dateObject = new Date();
        return this.optional(element) || (currdate.setHours(0, 0, 0, 0) >= dateObject.setHours(0, 0, 0, 0) || currdate === 0);
    });
    
    $('#top-form').validate({
        rules: {
            name: {
                alpha: true
            },
            date: {
                dateValidate: true
            },
            email: {
                email: true  
            },
            phone: {
                phoneUS: true
            }
        },
        messages: {
            name: 'Invalid name',
            date: 'Invalid date'
        }
        // }
    });
    $('#popup-form').validate({
        rules: {
            popupname: {
                alpha: true
            },
            popupdate: {
                dateValidate: true
            },
            popupemail: {
                email: true  
            },
            popupphone: {
                phoneUS: true
            }
        },
        messages: {
            popupname: 'Invalid name',
            popupdate: 'Invalid date',
            popupphone: 'Invalid phone'
        }
        // }
    });
    var inputs = $('#top-form #to, #top-form #from, #top-form #size, #top-form #date');
    $('#top-form .input-group .action-btn--next').click(function(e) {
        e.preventDefault();
        if(inputs.valid() == true ) {
            $('.second-step').show();
            $('.first-step').hide();
            
            console.log(1)
            $('#top-form .input-group .action-btn--submit').show();
            $('#top-form .input-group .action-btn--next').hide();
            $('#top-form .input-group .action-btn--prev').show();
        } else {
            
            console.log(0)
        }
    });
    $('#top-form .input-group .action-btn--prev').click(function(e) {
            $('.first-step').show();
            $('.second-step').hide();
            $('#top-form .input-group .action-btn--submit').hide();
            $('#top-form .input-group .action-btn--next').show();
            $('#top-form .input-group .action-btn--prev').hide();                
    });
});

    



   



// smooth scrolling

$(document).on('click', '.nav__el, .footer-nav__el, .logo a',  function(event) {
    event.preventDefault();
    if ($(window).width() < 720) {

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 115
        }, 1000);
    }
});
$("input[type='number']").keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

$('.phone-number').on('keydown keyup', function(e) {
    var max = 10;
    if (e.which < 0x20) {
        // e.which < 0x20, then it's not a printable character
        // e.which === 0 - Not a character
        return; // Do nothing
    }
    if (this.value.length == max) {
        e.preventDefault();
    } else if (this.value.length > max) {
        // Maximum exceeded
        this.value = this.value.substring(0, max);
    }
})
$('.cards-row').masonry({
    item: '.why-like-card'
});
if ($(window).width() > 1199) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    $(window).on('scroll touchmove', function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 5);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.header').addClass('header--tiny');
        } else {
            // Scroll Up
            if ($(this).scrollTop() < 80) {
                $('.header').removeClass('header--tiny');
            }
        }

        lastScrollTop = st;
    }
}

function initMap() {
    // Create a map object and specify the DOM element for display.
    var center = $('#map').data('center');
    var scrollwheel = false;
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: scrollwheel,
        center: center,
        zoom: 8
    });
    var icon = './images/location.png';
    var marker = new google.maps.Marker({
        map: map,
        position: center,
        icon: icon
    });
    google.maps.event.addListener(map, 'click', function(event) {
        if (this.get('scrollwheel') === false) {
            this.setOptions({ scrollwheel: true });

        } else {

            this.setOptions({ scrollwheel: false });
        }
    });
    if ($(window).width() > 1199) {
        map.panBy(-300, 0)
    }
}
