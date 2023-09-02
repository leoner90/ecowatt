 const slickSettingGallerySection= {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipe: true,
  autoplay: true,
  arrows: true,
  rows: 3,
  // lazyLoad: 'ondemand',
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        rows: 3,
      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        rows: 2,
      }
    },

    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        rows: 1,
        dots: false,
        arrows: false
      }
    }
  ]
};

const slickSettingPopUp = { 
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  arrows: true,
  rows: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,           
      }
    }
  ]
};

 
export {slickSettingGallerySection, slickSettingPopUp} ;