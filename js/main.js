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

     var size_choose = function(el) {
         $("#" + el + " tbody").html("");
         var tbody = "";
         var cm = 13.5;
         for (var i = 19; i < 37; i++) {
             tbody += '<tr>' +
                 '<td>' + i + ' (' + (cm + 'cm - ' + (cm + 0.5) + 'cm') + ')</td>' +
                 '<td align="center">' +
                 '<span class="d-inline-block pl-2 pr-2 pt-1 pb-1 pointer minus disabled">-</span>' +
                 '<input type="text" value="0" min="0" class="form-control d-inline-block text-center" style="height: 30px;width: 50px;" id="size_' + i + '">' +
                 '<span class="d-inline-block  pl-2 pr-2 pt-1 pb-1 pointer plus">+</span>' +
                 '</td>' +
                 '</tr>';
             cm += 0.5;
         }
         $("#" + el + " tbody").html(tbody);
     }
     size_choose("white");
     size_choose("black");
     size_choose("red");

     $('[data-toggle="popover"]').popover();

     $(".minus").click(function() {
         let qty = $(this).next().val();

         if (qty && Number(qty) > 0) {
             qty--;
             $(this).next().val(qty);
             $(this).closest("tr").addClass("choice");
             if (qty == 0) {
                 $(this).closest("tr").removeClass("choice");
             }

             let color = $(this).closest("table").attr("id");
             console.log(color);
             if (color === "white") {
                 let white_qty = 0;
                 $("#white tbody tr").each(function() {
                     white_qty += Number($(this).find("input").val());
                 });
                 setTimeout(() => {
                     $("#white_qty").text(white_qty);
                     console.log(white_qty);
                     if (white_qty > 0) {
                         $("#white_section").removeClass("hidden");
                         let white_amount = white_qty * PRICE;
                         $("#white_amount").text(formatNumber(white_amount));
                     } else {
                         $("#white_section").addClass("hidden");
                         $("#white_amount").text(0);
                     }
                 }, 100);

             } else if (color === "black") {
                 let black_qty = 0;
                 $("#black tbody tr").each(function() {
                     black_qty -= Number($(this).find("input").val());
                 });
                 $("#black_qty").text(black_qty);
                 if (black_qty > 0) {
                     $("#black_section").removeClass("hidden");
                     let black_amount = black_qty * PRICE;
                     $("#black_amount").text(formatNumber(black_amount));
                 } else {
                     $("#black_section").addClass("hidden");
                     $("#black_amount").text(0);
                 }
             } else if (color === "red") {
                 let red_qty = 0;
                 $("#red tbody tr").each(function() {
                     red_qty -= Number($(this).find("input").val());
                 });
                 $("#red_qty").text(red_qty);
                 if (red_qty > 0) {
                     $("#red_section").removeClass("hidden");
                     let red_amount = red_qty * PRICE;
                     $("#red_amount").text(formatNumber(red_amount));
                 } else {
                     $("#red_section").addClass("hidden");
                     $("#red_amount").text(0);
                 }
             }
         }
         calculate_total();
     });
     $(".plus").click(function() {
         let qty = $(this).prev().val();
         if (qty && Number(qty) >= 0) {
             qty++;
             $(this).prev().val(qty);
             $(this).closest("tr").addClass("choice");
             if (qty == 0) {
                 $(this).closest("tr").remove("choice");
             }

             let color = $(this).closest("table").attr("id");
             console.log(color);
             if (color === "white") {
                 let white_qty = 0;
                 $("#white tbody tr").each(function() {
                     white_qty += Number($(this).find("input").val());
                 });
                 $("#white_qty").text(white_qty);
                 if (white_qty > 0) {
                     $("#white_section").removeClass("hidden");
                     let white_amount = white_qty * PRICE;
                     $("#white_amount").text(formatNumber(white_amount));
                 } else {
                     $("#white_section").addClass("hidden");
                     $("#white_amount").text(0);
                 }
             } else if (color === "black") {
                 let black_qty = 0;
                 $("#black tbody tr").each(function() {
                     black_qty += Number($(this).find("input").val());
                 });
                 $("#black_qty").text(black_qty);
                 if (black_qty > 0) {
                     $("#black_section").removeClass("hidden");
                     let black_amount = black_qty * PRICE;
                     $("#black_amount").text(formatNumber(black_amount));
                 } else {
                     $("#black_section").addClass("hidden");
                     $("#black_amount").text(0);
                 }
             } else if (color === "red") {
                 let red_qty = 0;
                 $("#red tbody tr").each(function() {
                     red_qty += Number($(this).find("input").val());
                 });
                 $("#red_qty").text(red_qty);
                 if (red_qty > 0) {
                     $("#red_section").removeClass("hidden");
                     let red_amount = red_qty * PRICE;
                     $("#red_amount").text(formatNumber(red_amount));
                 } else {
                     $("#red_section").addClass("hidden");
                     $("#red_amount").text(0);
                 }
             }
             calculate_total();
         }
     });

     var calculate_total = function() {
         let white_qty = Number($("#white_qty").text());
         let black_qty = Number($("#black_qty").text());
         let red_qty = Number($("#red_qty").text());
         let white_amount = Number(replaceComma($("#white_amount").text()));
         let black_amount = Number(replaceComma($("#black_amount").text()));
         let red_amount = Number(replaceComma($("#red_amount").text()));
         let total_qty = white_qty + black_qty + red_qty;
         let total_amount = white_amount + black_amount + red_amount;

         $("#total_qty").text(total_qty);
         $("#total_amount").text(formatNumber(total_amount));

         let shipping_fee = Number(replaceComma($("#shipping_fee").text()));

         let total_checkout = total_amount + shipping_fee;
         $("#total_checkout").text(formatNumber(total_checkout));
     }

     $("#white_color").click(function() {
         inactive_color();
         hide_table_size();
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
             $("#white").addClass("hidden");
         } else {
             $(this).addClass("active");
             $("#white").removeClass("hidden");
         }
         //  enable_size_choose();
     });
     $("#black_color").click(function() {
         inactive_color();
         hide_table_size();
         if ($(this).hasClass("active")) {
             $("#black").addClass("hidden");
             $(this).removeClass("active");
         } else {
             $(this).addClass("active");
             $("#black").removeClass("hidden");
         }
         //  enable_size_choose();
     });
     $("#red_color").click(function() {
         inactive_color();
         hide_table_size();
         if ($(this).hasClass("active")) {
             $("#red").addClass("hidden");
             $(this).removeClass("active");
         } else {
             $(this).addClass("active");
             $("#red").removeClass("hidden");
         }
         //  enable_size_choose();
     });

     var inactive_color = function() {
         $(".wrap-color-product").removeClass("active");
     }

     var hide_table_size = function() {
         $("#white").addClass("hidden");
         $("#black").addClass("hidden");
         $("#red").addClass("hidden");
     };

     $("#white_color").click();


     var formatNumber = function(num) {
         if (num) {
             return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
         }
         return num;
     }

     var replaceComma = function(value) {
         if (value) {
             value = value.replace(/,/g, '');
             if (value.indexOf("đ") > -1) {
                 value = value.replace(" đ", "");
             }
             value = value.replace(/ /g, '');
         }
         return value;
     }

     const PRICE = 235000;
 });