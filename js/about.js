$(function() {

    $('img#bunches').on({
      'mouseover' : function() {
        $(this).attr('src','images/cookie3.png').attr("id","substitute");
      },
      mouseout : function() {
    $(this).attr('src','images/cookiebunches.jpg').attr("id","bunches");
      }
    });



});
