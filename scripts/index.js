/*
function readQuote() {


  db.collection("readTests").doc("testId")
    .onSnapshot(function (snap) {
      console.log(snap.data()); //print the document fields of "01"
      console.log(snap.data().fuckingTest);
      markerTest = snap.data().gPlaceId;
      // document.getElementById("readTest").innerText = snap.data().gPlaceId;
      var temp = snap.data.gPlaceId;
      markerTest = 'ChIJs0-pQ_FzhlQRi_OBm-qWkbs';
    })
}

function postRead() {


  db.collection("readTests").doc("dObVaNLqiOcsHHnq7ym9").collection("Post").doc("asdf")
    .onSnapshot(function (snap) {
      document.getElementById("readTest").innerText = snap.data().post;

    })
}

postRead();
*/


//map init
function initMap() {
  // my code
  $('#overlay').hide();
  // end of my code
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControl: false,
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 13,
  });

  //marker testing
  const myLatLng = {
    lat: -25.363,
    lng: 131.044
  };
  const myLat = {
    lat: +25.363,
    lng: -131.044
  };




  const input = document.getElementById("pac-input");
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);
  // Specify just the place data fields that you need.
  autocomplete.setFields(["place_id", "geometry", "name"]);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);


  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");


  // adding markers from firestore;

  // marker test





  db.collection("Venue").get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        var id = doc.data().venueID


        var request = {
          placeId: id
        };

        var service = new google.maps.places.PlacesService(map);

        service.getDetails(request, function (place, status) {

          if (status == google.maps.places.PlacesServiceStatus.OK) {

            var m = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });

            google.maps.event.addListener(m, 'click', function () {

              $("#locationName").text(place.name);
              $("#googlePlaceID").text(place.place_id);
              $("#overlay").show(1000);
              testCheck(place.place_id);

              infowindowContent.children.namedItem("place-name").textContent = place.name;
              infowindowContent.children.namedItem("place-id").textContent =
                place.place_id;
              
              
              infowindow.open(map, m)
            });
          }
        });

      });

    });





  infowindow.setContent(infowindowContent);




  const marker = new google.maps.Marker({
    map: map
  });


  marker.addListener("click", () => {

    $("#overlay").show(1000);


    infowindow.open(map, marker);
  });
  autocomplete.addListener("place_changed", () => {

    $("#overlay").show(1000);

    infowindow.close();
    const place = autocomplete.getPlace();

    testCheck(place.place_id);
    console.log(place.place_id);

    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location,
    });
    marker.setVisible(true);
    //document.getElementById("map").style

    $("#locationName").text(place.name);
    $("#googlePlaceID").text(place.place_id);
    infowindowContent.children.namedItem("place-name").textContent = place.name;
    infowindowContent.children.namedItem("place-id").textContent =
      place.place_id;
    
    infowindow.open(map, marker);





  });
}




//end of map stuff