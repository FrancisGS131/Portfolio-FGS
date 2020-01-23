/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");
  var qualities = ["Problem Solver.","Ambitious.","Meticulous.","Engineer."];
  for(var i=0;i<4;i++){
    // qualities[i] = qualities[i].fontcolor("blue");
    // qualities[i] = qualities[i].bold();
    qualities[i] = qualities[i].italics();
  }

  var typed = new Typed('#typed',{
    strings: [qualities[1], qualities[2], "a "+ qualities[0], "an "+qualities[3]],
    typeSpeed: 80,
    backSpeed: 25,
    smartBackspace: true,
    loop: true,
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

    $('.servicesNoScroll-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
      });

      (function ($) {
  	"use strict";
  	var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
      if( ! $('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
      }
    })

    // Preloader
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });

  	/*--/ Star ScrollTop /--*/
  	$('.scrolltop-mf').on("click", function () {
  		$('html, body').animate({
  			scrollTop: 0
  		}, 1000);
  	});

  	/*--/ Star Counter /--*/
  	$('.counter').counterUp({
  		delay: 15,
  		time: 2000
  	});

  	/*--/ Star Scrolling nav /--*/
  	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
  		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  			var target = $(this.hash);
  			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  			if (target.length) {
  				$('html, body').animate({
  					scrollTop: (target.offset().top - navHeight + 5)
  				}, 1000, "easeInOutExpo");
  				return false;
  			}
  		}
  	});

  	// Closes responsive menu when a scroll trigger link is clicked
  	$('.js-scroll').on("click", function () {
  		$('.navbar-collapse').collapse('hide');
  	});

  	// Activate scrollspy to add active class to navbar items on scroll
  	$('body').scrollspy({
  		target: '#mainNav',
  		offset: navHeight
  	});
  	/*--/ End Scrolling nav /--*/

  	/*--/ Navbar Menu Reduce /--*/
  	$(window).trigger('scroll');
  	$(window).on('scroll', function () {
  		var pixels = 50;
  		var top = 1200;
  		if ($(window).scrollTop() > pixels) {
  			$('.navbar-expand-md').addClass('navbar-reduce');
  			$('.navbar-expand-md').removeClass('navbar-trans');
  		} else {
  			$('.navbar-expand-md').addClass('navbar-trans');
  			$('.navbar-expand-md').removeClass('navbar-reduce');
  		}
  		if ($(window).scrollTop() > top) {
  			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
  		} else {
  			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
  		}
  	});

  	/*--/ Star Typed /--*/
  	if ($('.text-slider').length == 1) {
      var typed_strings = $('.text-slider-items').text();
  		var typed = new Typed('.text-slider', {
  			strings: typed_strings.split(','),
  			typeSpeed: 80,
  			loop: true,
  			backDelay: 1100,
  			backSpeed: 30
  		});
  	}

  	/*--/ Testimonials owl /--*/
  	$('#testimonial-mf').owlCarousel({
  		margin: 20,
  		autoplay: true,
      loop:true,
  		autoplayTimeout: 4000,
  		autoplayHoverPause: true,
  		responsive: {
  			0: {
  				items: 1,
  			}
  		}
  	});

  })(jQuery);

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})
