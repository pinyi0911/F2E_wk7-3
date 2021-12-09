$(document).ready(function(){
    $('.box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        

      });
          
  });

  $('.box').slick({
    prevArrow:$('.l1'),
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
});


