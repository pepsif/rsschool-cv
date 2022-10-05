// ------gallery-slider----

$(document).ready(function(){
    $('.gallery-block').slick({
   
      infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1

    });
  });

  // -----TESTMONIALS------------
$(document).ready(function(){
    $('.review-block').slick({
   arrows: false,
      infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4

    });
  });