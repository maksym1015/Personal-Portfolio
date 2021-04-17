$(document).ready(function () {
  // Init header links
  $('.header-nav__link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).attr('href');

    $('.header-nav__link.active').removeClass('active');
    $(this).addClass('active');

    $('.page-content').animate({
      scrollTop: $(target).offset().top
    }, 500);
    console.log($(target).offset().top);
  });
  // Init custom slider button
  $('.btn-custom-slider.btn-prev').on('click', function () {
    let target = $(this).data('target');
    $('.' + target).slick('slickPrev');
  });
  $('.btn-custom-slider.btn-next').on('click', function () {
    let target = $(this).data('target');
    $('.' + target).slick('slickNext');
  });
  // Init testimonial slider
  $('.testimonial-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // Init Client slider
  $('.client-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  // Init hamburger button
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
  });
  // Portfolio subpage filters
  
  function portfolio_init() {
      portfolio_grid = $('.portfolio-grid'),
      portfolio_filter = $('.portfolio-filters'),
      portfolio_filter_item = $('.portfolio-filters .filter');

    if (portfolio_grid) {
      portfolio_grid.shuffle({
        speed: 450,
        itemSelector: 'figure'
      });

      $('.site-auto-menu').on("click", "a", function (e) {
        portfolio_grid.shuffle('update');
      });

      portfolio_filter.on("click", ".filter", function (e) {
        portfolio_grid.shuffle('update');
        e.preventDefault();
        portfolio_filter_item.parent().removeClass('active');
        $(this).parent().addClass('active');
        portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
      });

    }
  }
  var $portfolio_container = $(".portfolio-grid");
  $portfolio_container.imagesLoaded(function () {
    portfolio_init(this);
  });
  // /Portfolio subpage filters

  // Animate Numbers
  function animateNum(elmnt) {
    var $this = elmnt;
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  }
  $('.funfact-item__number').each(function() {
    animateNum($(this));
  });
});