$(document).ready(function(){
	$address = $(this).find('.address');
	$address = $address.clone().html();
			
	var locations = [
		['<div id="info-bubble">'+
			'<div id="bodyContent">'+
				'<p><strong>Trivalent</strong><br />'+
				$address + '</p>'+
			'</div>'+
		'</div>', 38.973146,-76.551328, 1],
	];
	
	var latlong = new google.maps.LatLng(38.994755,-76.551328);
	var styles = [{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#d9cfd8" },
	        { "lightness": 17 }
	    ]},
	{
	    "featureType": "landscape",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 20 }
	    ]},
	{
	    "featureType": "road.highway",
	    "elementType": "geometry.fill",
	    "stylers": [
	        { "color": "#ffffff" },
	        { "lightness": 17 }
	    ]},
	{
	    "featureType": "road.highway",
	    "elementType": "geometry.stroke",
	    "stylers": [
	        { "color": "#ffffff" },
	        { "lightness": 29 },
	        { "weight": 0.2 }
	    ]},
	{
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#ffffff" },
	        { "lightness": 18 }
	    ]},
	{
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#ffffff" },
	        { "lightness": 16 }
	    ]},
	{
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#f5f5f5" },
	        { "lightness": 21 }
	    ]},
	{
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#dedede" },
	        { "lightness": 21 }
	    ]},
	{
	    "elementType": "labels.text.stroke",
	    "stylers": [
	        { "visibility": "on" },
	        { "color": "#ffffff" },
	        { "lightness": 16 }
	    ]},
	{
	    "elementType": "labels.text.fill",
	    "stylers": [
	        { "saturation": 36 },
	        { "color": "#333333" },
	        { "lightness": 40 }
	    ]},
	{
	    "elementType": "labels.icon",
	    "stylers": [
	        { "visibility": "off" }
	    ]},
	{
	    "featureType": "transit",
	    "elementType": "geometry",
	    "stylers": [
	        { "color": "#f2f2f2" },
	        { "lightness": 19 }
	    ]},
	{
	    "featureType": "administrative",
	    "elementType": "geometry.fill",
	    "stylers": [
	        { "color": "#fefefe" },
	        { "lightness": 20 }
	    ]},
	{
	    "featureType": "administrative",
	    "elementType": "geometry.stroke",
	    "stylers": [
	        { "color": "#fefefe" },
	        { "lightness": 17 },
	        { "weight": 1.2 }
	    ]}
	]
	
	function initialize() {
		var myOptions = {
			zoom: 12,
			center: latlong,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoomControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			draggable: false,
			scrollwheel: false,
			styles: styles
		};
		
		map = new google.maps.Map(document.getElementById('map'), myOptions);
		var infowindow = new google.maps.InfoWindow();
		var marker, i;
		
		for (i = 0; i < locations.length; i++) {  
			marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			icon: "/wp-content/themes/trivalent/assets/images/pin.png",
			map: map
			});
			
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
	 		return function() {
	 			infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
			})(marker, i));
			infowindow.setContent(locations[i][0]);
			
			if ($(window).width() < 767) {
				infowindow.open(map, marker);
			}
			
		}
	}
	//Center on resize	
	google.maps.event.addDomListener(window, 'resize', initialize);
	google.maps.event.addDomListener(window, 'load', initialize)

});