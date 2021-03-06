$(document).ready(function() {


    var paragraph = $('.about .item .review__paragraph');
    paragraph.each(function(i) {
            
            if ($(this).height() > 237) {
                $(this).parent().parent().find('.learn-more').toggle();
            }
        })
    $('.item .learn-more').on('click', function() {
        var text = 'Show more'
        $(this).toggleClass('learn-more--active');
        if ($(this).hasClass('learn-more--active')) {
            $(this).text('Show less');
        } else {
            $(this).text(text);
        }
        var parent = $(this).parent();
        parent.toggleClass('item--active');
        parent.find('.review').toggleClass('review--active');
    })


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
    $('.quick-quote-form .form-control, .quick-quote-form .form-submit').click(animate);

    $('#quick-quote-form.quick-quote-form__dismiss, #quick-quote-form.quick-quote-form .form-more').click(function(e) {
        
        $(this)
            .find('#quick-quote-form.quick-quote-form')
            .toggleClass('quick-quote-form--active')
            .parents('.container')
            .toggleClass('container--active')
        $('#quick-quote-form .center').toggleClass('center--active');
        $('#quick-quote-form .right-side').toggleClass('right-side--active');
        $('#quick-quote-form .quick-quote-form__dismiss').toggle();
        $('#quick-quote-form .quick-quote-form .title').toggleClass('title--active');
        $('#quick-quote-form .quick-quote-form .subtitle').toggleClass('subtitle--active');
        $('#quick-quote-form .input-group .form-more').toggleClass('form-more--active');
    });

    var popupForm = $('.quick-quote-form--popup');
    popupForm.addClass('quick-quote-form--active');
    popupForm.find('.center').toggleClass('center--active');
    popupForm.find('.right-side').toggleClass('right-side--active');
    popupForm.find('.input-group .form-more').hide();
    function animate(e) {
        if ($('.center').hasClass('center--active')) {
            return
        } else {
            var parent = $(this).parents('.quick-quote-form');
            console.log(parent)
            $('.quick-quote-form__dismiss').toggle();
            $('.center').toggleClass('center--active');
            $('.right-side').toggleClass('right-side--active');
            parent.addClass('quick-quote-form--active');
            $('.quick-quote-form .title').toggleClass('title--active');
            $('.quick-quote-form .subtitle').toggleClass('subtitle--active');
            $('.input-group .form-more').toggleClass('form-more--active');
        }
    }
    // slide toggle handling

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
        mainClass: 'my-mfp-zoom-in'
    });
    $('.badge--less').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
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
        mainClass: 'my-mfp-zoom-in'
    });

    // dropdown

    $(".faq__qw").on('click', function(e) {
        var el = $(this).parent();
        el.find(".faq__answer").slideToggle();
        el.find(".icon-check-minus").toggle();
        el.find(".icon-check-plus").toggle();
        $(this).toggleClass('faq__qw-bold');
    });

    $('.two-items-in-row').slick({
        speed: 1500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.fullwidth-slider').slick({
        speed: 1500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // form validation
    $('.input-date').datepicker();
    // $('.input-date-1').datepicker();

    $.validate({
        form: '#quick-quote-form',
        validateOnBlur: false,
        scrollToTopOnError: false,
        onValidate: function($form) {
            var dateObject = new Date();
            var date = dateObject.getDate() + "." + 0 + (dateObject.getMonth() + 1) + "." + dateObject.getFullYear();
            if ($('#quick-quote-form .input-date').val() === 0 ||
                $('#quick-quote-form .input-date').val() < date) {
                return {
                    element: $('#quick-quote-form-date'),
                    message: 'Please set correct date'
                }
            } 
        }
    });
    $.validate({
        form: '#quick-quote-form-popup',
        validateOnBlur: false,
        scrollToTopOnError: false,
        onValidate: function($form) {
            
            var dateObject = new Date();
            var date = dateObject.getDate() + "." + 0 + (dateObject.getMonth() + 1) + "." + dateObject.getFullYear() ;
            if ($('#quick-quote-form-popup .input-date').val() === 0 ||
                $('#quick-quote-form-popup .input-date').val() < date) {
                return {
                    element: $('#quick-quote-form-popup .input-date'),
                    message: 'Please set correct date'
                }
            }
        }
    });
    // form validation


    // smooth scrolling

    $(document).on('click', '.nav__el, .footer-nav__el', function(event) {
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

});

$(window).scroll(startCounter);



function startCounter() {
    var hT = $('.data-item .text span').offset().top,
        hH = $('.data-item .text span').outerHeight(),
        wH = $(window).height();
    if ($(window).scrollTop() > hT + hH - wH) {
        $(window).off("scroll", startCounter);
        $('.data-item .text span').each(function() {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

// function initMap() {
//     // Create a map object and specify the DOM element for display.
//     var center = $('#map').data('center');
//     var scrollwheel = false;
//     var map = new google.maps.Map(document.getElementById('map'), {
//         scrollwheel: scrollwheel,
//         center: center,
//         zoom: 8
//     });
//     var icon = '/assets/images/location.png';
//     var marker = new google.maps.Marker({
//         map: map,
//         position: center,
//         icon: icon
//     });
//     google.maps.event.addListener(map, 'click', function(event) {
//         if (this.get('scrollwheel') === false) {
//             this.setOptions({ scrollwheel: true });

//         } else {

//             this.setOptions({ scrollwheel: false });
//         }
//     });


//     // Hide Header on on scroll down


// }
