import owlCarousel from 'owl.carousel';

$(document).ready(function () {
  $('#home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      },
      1150: {
        items: 2
      }
    }
  });
});

$(document).ready(function () {
  $('#features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        rtl: true,
        dots: false
      },

      1150: {
        items: 3,
        rtl: true
      }
    }
  });
});

$(document).ready(function () {
  $('#handpicked-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      }
    }
  });
});

$(document).ready(function () {
  $('#fall-collection-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false
      }
    }
  });
});

$(document).ready(function () {
  $('#our-brands-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false
      }
    }
  });
});

$(document).ready(function () {
  $('#testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      }
    }
  });
});
