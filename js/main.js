 AOS.init({
     duration: 800,
     easing: 'slide',
     once: false
 });

 jQuery(document).ready(function($) {

     "use strict";

     $(".loader").delay(1000).fadeOut("slow");
     $("#overlayer").delay(1000).fadeOut("slow");

     $('.slide-1').owlCarousel();

     var siteMenuClone = function() {

         $('.js-clone-nav').each(function() {
             var $this = $(this);
             $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
         });


         setTimeout(function() {

             var counter = 0;
             $('.site-mobile-menu .has-children').each(function() {
                 var $this = $(this);

                 $this.prepend('<span class="arrow-collapse collapsed">');

                 $this.find('.arrow-collapse').attr({
                     'data-toggle': 'collapse',
                     'data-target': '#collapseItem' + counter,
                 });

                 $this.find('> ul').attr({
                     'class': 'collapse',
                     'id': 'collapseItem' + counter,
                 });

                 counter++;

             });

         }, 1000);

         $('body').on('click', '.arrow-collapse', function(e) {
             var $this = $(this);
             if ($this.closest('li').find('.collapse').hasClass('show')) {
                 $this.removeClass('active');
             } else {
                 $this.addClass('active');
             }
             e.preventDefault();

         });

         $(window).resize(function() {
             var $this = $(this),
                 w = $this.width();

             if (w > 768) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         })

         $('body').on('click', '.js-menu-toggle', function(e) {
             var $this = $(this);
             e.preventDefault();

             if ($('body').hasClass('offcanvas-menu')) {
                 $('body').removeClass('offcanvas-menu');
                 $this.removeClass('active');
             } else {
                 $('body').addClass('offcanvas-menu');
                 $this.addClass('active');
             }
         })

         // click outisde offcanvas
         $(document).mouseup(function(e) {
             var container = $(".site-mobile-menu");
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         });
     };
     siteMenuClone();


     var sitePlusMinus = function() {
         $('.js-btn-minus').on('click', function(e) {
             e.preventDefault();
             if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                 $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
             } else {
                 $(this).closest('.input-group').find('.form-control').val(parseInt(0));
             }
         });
         $('.js-btn-plus').on('click', function(e) {
             e.preventDefault();
             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
         });
     };
     // sitePlusMinus();


     var siteSliderRange = function() {
         $("#slider-range").slider({
             range: true,
             min: 0,
             max: 500,
             values: [75, 300],
             slide: function(event, ui) {
                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
             }
         });
         $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
     };
     // siteSliderRange();




     var siteCarousel = function() {
         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 margin: 0,
                 smartSpeed: 1000,
                 autoplay: true,
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 0,
                         nav: true,
                         items: 2
                     },
                     1000: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 2
                     },
                     1200: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 3
                     }
                 }
             });
         }

         $('.slide-one-item').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             smartSpeed: 1500,
             autoplay: true,
             pauseOnHover: false,
             dots: true,
             nav: true,
             navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
         });




     };
     siteCarousel();

     var siteCountDown = function() {
         $('#date-countdown').countdown('2020/10/10', function(event) {
             var $this = $(this).html(event.strftime('' +
                 '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                 '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                 '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                 '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                 '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
         });
     };
     // siteCountDown();

     var siteDatePicker = function() {
         if ($('.datepicker').length > 0) {
             $('.datepicker').datepicker();
         }
     };
     // siteDatePicker();

     var siteSticky = function() {
         $(".js-sticky-header").sticky({ topSpacing: 0 });
     };
     siteSticky();

     // navigation
     var OnePageNavigation = function() {
         var navToggler = $('.site-menu-toggle');
         $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
             e.preventDefault();
             var hash = this.hash;
             $('html, body').animate({
                 'scrollTop': $(hash).offset().top - 50
             }, 600, 'easeInOutExpo', function() {
                 // window.location.hash = hash;
             });
         });
     };
     OnePageNavigation();

     var siteScroll = function() {
         $(window).scroll(function() {
             var st = $(this).scrollTop();
             if (st > 100) {
                 $('.js-sticky-header').addClass('shrink');
             } else {
                 $('.js-sticky-header').removeClass('shrink');
             }
         })
     };
     siteScroll();


     var counter = function() {
         $('#about-section').waypoint(function(direction) {
             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number > span').each(function() {
                     var $this = $(this),
                         num = $this.data('number');
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });
             }
         }, { offset: '95%' });
     }
     counter();


     var choose_size = function() {
         $("#size_choose").html("");
         var tbody = "";
         var cm = 13.5;
         for (var i = 19; i < 37; i++) {
             tbody += '<button class="btn btn-secondary text-white d-inline-block m-2" disabled data-toggle="popover" data-trigger="hover" title="Chiều dài chân phù hợp" data-content="' + cm + ' (cm) - ' + (cm + 0.5) + ' (cm)">Size ' + i + '</button>';
             //  tbody += '<tr>' +
             //      '<td width="100px">Size ' + i + '<span class="ml-2 icon icon-info-circle" style="cursor:pointer" data-toggle="popover" data-trigger="hover" title="Chiều dài chân phù hợp" data-content="' + cm + ' (cm) - ' + (cm + 0.5) + ' (cm)"></span></td>' +
             //      '<td align="center">' +
             //      '<div class="input-group mb-3 input-group-sm">' +
             //      '<div class="input-group-prepend">' +
             //      '<span class="d-inline-block pl-2 pr-2 pt-1 pb-1 pointer form-control" style="height: 30px;">-</span>' +
             //      '</div>' +
             //      '<input type="text" value="0" min="0" class="form-control d-inline-block text-center" style="height: 30px;width: 30px;" id="color_w_' + i + '">' +
             //      '<div class="input-group-append">' +
             //      '<span class="d-inline-block  pl-2 pr-2 pt-1 pb-1 pointer form-control" style="height: 30px;">+</span>' +
             //      '</div>' +
             //      '</div>' +
             //      '</td>' +
             //      '<td align="center">' +
             //      '<span class="icon icon-minus d-inline-block pl-2 pr-2 pt-1 pb-1 pointer"></span>' +
             //      '<input type="text" value="0" min="0" class="form-control d-inline-block text-center" style="height: 30px;width: 50px;" id="color_b_' + i + '">' +
             //      '<span class="icon icon-plus d-inline-block  pl-2 pr-2 pt-1 pb-1 pointer"></span>' +
             //      '</td>' +
             //      '<td align="center">' +
             //      '<span class="icon icon-minus d-inline-block pl-2 pr-2 pt-1 pb-1 pointer"></span>' +
             //      '<input type="text" value="0" min="0" class="form-control d-inline-block text-center" style="height: 30px;width: 50px;" id="color_r_' + i + '">' +
             //      '<span class="icon icon-plus d-inline-block  pl-2 pr-2 pt-1 pb-1 pointer"></span>' +
             //      '</td>' +
             //      '</tr>';
             cm += 0.5;
         }
         $("#size_choose").html(tbody);
     }
     choose_size();

     $('[data-toggle="popover"]').popover();

     $("#white_color").click(function() {
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
         } else {
             $(this).addClass("active");
         }
         enable_size_choose();
     });
     $("#black_color").click(function() {
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
         } else {
             $(this).addClass("active");
         }
         enable_size_choose();
     });
     $("#red_color").click(function() {
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
         } else {
             $(this).addClass("active");
         }
         enable_size_choose();
     });

     var enable_size_choose = function() {
         if ($("#white_color").hasClass("active") || $("#black_color").hasClass("active") || $("#red_color").hasClass("active")) {
             $("#size_choose").find("button").prop("disabled", "");
         } else {
             $("#size_choose").find("button").prop("disabled", true);
         }
     }

 });