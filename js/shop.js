$(function() {

 $('ul#money').hide()
  //.delay(1500).slideDown(500);

//  $("li.dropdown").on("hover mouseover", function (){
//    $(this).css("color", "#FFFFFF");
//  });

//  $("li.dropdown").on("mouseout mouseup", function (){
//    $(this).css("color", "#512e0f");
//  });

  var thing = $(document).height() - $("#prices").offset().top;

  $(window).on("scroll", function() {

    if ( $(window).scrollTop() > ($(window).height() - $("#prices").offset().top) ) {
      $('ul#money').slideDown(800);
      $("li.dropdown").on("hover mouseover", function (){
       $(this).css("color", "#FFFFFF");
      });

      $("li.dropdown").on("mouseout mouseup", function (){
      $(this).css("color", "#512e0f");
      });

    } else if  ( $(window).scrollTop() < ($(window).height() - $("#prices").offset().top) ) {
      $("ul#money").slideUp(500);
    }

    else {
      $("ul#money").show();
      
      $("li.dropdown").on("hover mouseover", function (){
       $(this).css("color", "#FFFFFF");
      });

      $("li.dropdown").on("mouseout mouseup", function (){
      $(this).css("color", "#512e0f");
      });

    }

  });


});
