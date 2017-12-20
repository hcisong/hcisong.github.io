$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors:['overview', 'five_years', 'which_should_i_go','when_should_i_go','more_infos'],
      menu: '#navbar',
      scrollingSpeed: 800
  });

  var left = document.getElementById('left');
  var right = document.getElementById('right');



  function carousel_left() {
    var activeImg = document.querySelector('li.active');
    var previousImg = activeImg.previousElementSibling;

    // when there is no previous sibling, then use the last one
    if(!previousImg) {
      var previousImg = document.querySelector('.img-list li:last-child');
    }

    previousImg.classList.add('active');
    activeImg.classList.remove('active');
  }

  function carousel_right() {
    var activeImg = document.querySelector('li.active');
    var nextImg = activeImg.nextElementSibling;

    // when there is no next sibling, then use the first one
    if(!nextImg) {
      var nextImg = document.querySelector('.img-list li:first-child');;
    }

    nextImg.classList.add('active');
    activeImg.classList.remove('active');
  }

  left.addEventListener('click', carousel_left);
  right.addEventListener('click', carousel_right);

  $('#bar_basic').show();
  $('#bar_science').hide();
  $('#bar_art').hide();

  $('button[name=all]').on('click', function(e){
    $('#bar_basic').show();
    $('#bar_science').hide();
    $('#bar_art').hide();
  });

  $('button[name=science]').on('click', function(e){
    $('#bar_basic').hide();
    $('#bar_science').show();
    $('#bar_art').hide();
  });

  $('button[name=art]').on('click', function(e){
    $('#bar_basic').hide();
    $('#bar_science').hide();
    $('#bar_art').show();
  });

  $('#bar_prices').show();
  $('#bar_visit').hide();

  $('button[name=price]').on('click', function(e){
    $('#bar_prices').show();
    $('#bar_visit').hide();
  });

  $('button[name=visit]').on('click', function(e){
    $('#bar_prices').hide();
    $('#bar_visit').show();
  });

  // $('#menu').hide();
  //
  //
  // $(window).scroll(function() {
  //   var y = $(this).scrollTop();
  //   if (y > 500) {
  //     $('#menu').show();
  //     alert('hahha');
  //   } else {
  //     $('#menu').hide();
  //   }
  // });

  $(document).scroll(function () {
    //stick nav to top of page
    // var y = $(this).scrollTop();
    // var navWrap = $('#menu').offset().top;
    // if (y > navWrap) {
    //     $('#menu').addClass('sticky');
    // } else {
    //     $('#menu').removeClass('sticky');
    // }
  });
});
