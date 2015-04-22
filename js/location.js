


  function init () {

    var mapOptions = {
      center: new google.maps.LatLng(26.2708333,-80.2708333),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    };

    var venueMap;
    venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);



    var marker = new google.maps.Marker({
    position: google.maps.LatLng(26.2708333,-80.2708333),
    icon: "images/hat.png",
    map: venueMap

  });



  }





  window.onload = init();
