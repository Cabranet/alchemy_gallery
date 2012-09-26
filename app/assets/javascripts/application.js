// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
/*    Cabranet JavaScript/jQuery
    Copyright Cabranet Limited
    2012
*/

// Function for changing Indicator divs to reflect the current slide
function changeIndicator($slideCounter) {
  if ($slideCounter==1) {
    $('.show1').css ('background-color','#FF0');
    $('.show2,.show3').css ('background-color','#A6BDD6');
  }
  if ($slideCounter==2) {
    $('.show2').css ('background-color','#FF0');
    $('.show1,.show3').css ('background-color','#A6BDD6');
  }
  if ($slideCounter==3) {
    $('.show3').css ('background-color','#FF0');
    $('.show1,.show2').css ('background-color','#A6BDD6');
  }
}

// Changing slide function
function changeSlide ($slideCounter) {
  if ($('.scroll-bar').children().index('.scroll'+$slideCounter)!=0) {
    $('.scroll'+$slideCounter).insertBefore('.scroll-bar span:first');
  }
}

// Set slide counter to 1
$slideCounter = 1;
    
// Wait for document to be ready
$(document).ready( function() {
  
  // Set up the coloured slide indicators
  changeIndicator($slideCounter);
  changeSlide($slideCounter);
  
  // When next clicked move the first slide to after the last slide
  $('#next').click (function() {
    if ($slideCounter!=3) {
      $slideCounter += 1
    }
    else {
      $slideCounter = 1
    }
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  });
  
  //When previous clicked move the last slide to before the first slide
  $('#prev').click (function() {
    if ($slideCounter!=1) {
      $slideCounter -= 1
    }
    else {
      $slideCounter = 3
    }
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  });
  
  //Show arrow on hover
  $('#next').mouseover(function () {
    $(this).css ('background-image','url(images/arrow_right.png)');
    $(this).animate({right: '-=10'}, 400);
    $(this).animate({right: '+=10'}, 400);
  });
  $('#next').mouseout(function () {
    $(this).css ('background-image','none');
  });
  
  //When previous clicked move the last slide to before the first slide
  $('#prev').mouseover(function () {
    $(this).css ('background-image','url(images/arrow_left.png)');
    $(this).animate({left: '-=10'}, 400);
    $(this).animate({left: '+=10'}, 400);
  });
  $('#prev').mouseout(function () {
    $(this).css ('background-image','none');
  });
  
  //Go to slide 1 when .show1 clicked
  $('.show1').click (function () {
    $slideCounter = 1;
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  });
  //Go to slide 2 when .show2 clicked
  $('.show2').click (function () {
    $slideCounter = 2;
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  });
  //Go to slide 3 when .show3 clicked
  $('.show3').click (function () {
    $slideCounter = 3;
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  });
});

$(window).load(function() { //start after HTML, images have loaded
  setInterval(function(){
    if ($slideCounter!=3) {
      $slideCounter += 1
    }
    else {
      $slideCounter = 1
    }
    changeSlide($slideCounter);
    changeIndicator($slideCounter);
  }, 5500);
});