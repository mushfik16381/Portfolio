$('.service-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:1500,
    prevArrow:'<div class="left"><i class="fas fa-long-arrow-alt-left prev "></i></div> ',
    nextArrow:'<div class="right"><i class="fas fa-long-arrow-alt-right next "></i></div> ',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.test-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:1500,
    prevArrow:' <div class="left"><i class="fas fa-long-arrow-alt-left prev "></i></div> ',
    nextArrow:'<div class="right"><i class="fas fa-long-arrow-alt-right next "></i></div> ',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });