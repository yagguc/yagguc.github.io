function initMap() {

  var styleArray = [
    {
      featureType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
  ];

  var mapDiv = document.getElementById('contact-map');
  if (!mapDiv) return;

  var LatLng = {lat: 51.8233121, lng: 5.86876};
  var LatLngMarker = {lat: 51.8233121, lng: 5.86876};

  var styledMap = new google.maps.StyledMapType(styleArray,
    {name: "Grayscale"});

  var map = new google.maps.Map(mapDiv, {
    zoom: 17,
    center: LatLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
    scrollwheel: false
  });

  var pin = document.querySelector('[data-pin]').dataset.pin;

  var marker = new google.maps.Marker({
    position: LatLngMarker,
    map: map,
    title: 'Heyendaalseweg 135 6525 AJ Nijmegen NL',
    icon: '' + pin
  });

  var infowindow = new google.maps.InfoWindow();

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
