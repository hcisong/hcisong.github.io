$(document).ready(function() {
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
});
