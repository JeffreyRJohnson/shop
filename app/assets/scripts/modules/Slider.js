import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  $('#home-carousel').owlCarousel({
    loop: true,
    margin: 100,
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
      //1150
      768: {
        items: 2,
        dots: true
      }
    }
  });
});

$(document).ready(function() {
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
      //1150
      768: {
        items: 3,
        rtl: true
      }
    }
  });
});

$(document).ready(function() {
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
      },
      768: {
        items: 3
      }
    }
  });
});

$(document).ready(function() {
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
      },
      768: {
        items: 4
      }
    }
  });
});

$(document).ready(function() {
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
      },
      768: {
        items: 6
      }
    }
  });
});

$(document).ready(function() {
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
      },
      768: {
        items: 2
      }
    }
  });
});
