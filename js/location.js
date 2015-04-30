$(function() {


  function init () {

    var mapOptions = {
      center: new google.maps.LatLng(26.2708333,-80.2708333),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    };

    var venueMap;
    venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);


    var pinLocation = new google.maps.LatLng(26.2771,-80.269203);

    var startPosition = new google.maps.Marker({
    position: pinLocation,
    map: venueMap,
    icon: "images/hat.png"

  });

  }

  window.onload = init();


});

//      function checkName() {
//       var userLocation = document.contact.place.value;
//       if (!userLocation) {
//       document.contact.place.setAttribute("class", "invalid");
//         document.getElementById("hidden").setAttribute("style", "opacity: 1; transition: opacity 0.5s ease-in;")
//       }

//       var userName = document.contact.user.value;
//       if (!userName) {
//         document.contact.user.setAttribute("class", "invalid");
//         document.getElementById("hidden").setAttribute("style", "opacity: 1; transition: opacity 0.5s ease-in;")
//       }


//      }
