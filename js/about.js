$(function() {

    $('img#bunches').on({
      'mouseover' : function() {
        $(this).attr('src','images/cookiemonster.jpg').attr("id","substitute");
      },
      mouseout : function() {
    $(this).attr('src','images/cookiebunches.jpg').attr("id","bunches");
      }
    });



});
