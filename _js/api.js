
function getAPIdata() {

	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey ='d6d8593c3c9cf34b5fb0b2b7f8c8138f';
	var city = document.getElementById('city').value;

	// construct request
	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		console.log(response);
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var city = document.getElementById('city').value;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = '  In ' + city + ' it is ' + degC + '&#176;C ' + ' and '+ type;
	plaatje = '<div class=plaatje">';
	plaatje +='<div class="icon"> <img src="http://openweathermap.org/img/wn/'+icon+'.png"> </div>';
	weatherBox.innerHTML += plaatje;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

document.getElementById('getWeather').onclick = function(){
	// init data stream
	getAPIdata();
};




function getAPIdata2() {

  // construct request
  var request = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=I1eoReqW62Jcv3srNNiTmlo0Wn7zLr8K';

  // get current weather
  fetch(request)  
  
  // parse response to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // do something with response
  .then(function(response) {
    // show full JSON object
    console.log(response);

    ///first headline
   var newshead1 = document.getElementById('newshead1');
   newshead1.innerHTML = response.results[0].title;
  var newsdis1 = document.getElementById('newsdis1');
   newsdis1.innerHTML = response.results[0].abstract;
   //
   
    var newshead2 = document.getElementById('newshead2');
   newshead2.innerHTML = response.results[1].title;
   
  var newsdis2 = document.getElementById('newsdis2');
   newsdis2.innerHTML = response.results[1].abstract;
   //

    var newshead3 = document.getElementById('newshead3');
   newshead3.innerHTML = response.results[2].title;
   
  var newsdis3 = document.getElementById('newsdis3');
   newsdis3.innerHTML = response.results[2].abstract;
   //
  var newshead4 = document.getElementById('newshead4');
   newshead4.innerHTML = response.results[3].title;
   
  var newsdis4 = document.getElementById('newsdis4');
   newsdis4.innerHTML = response.results[3].abstract;
   



  });
}

// init data stream
getAPIdata2();


// var myMap;

// function initMap() {
// 	// set options for map 
// 	var mapOptions = {
// 		center: {
// 			lat: 52.067514882683064, 
// 			lng: 4.3238686164587
// 		},
// 		zoom: 14,
// 		mapTypeId: 'hybrid'
// 	};

// 	// create map and add to page
// 	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

// }



mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vczAzMDMiLCJhIjoiY2s4azQ3a2p6MDFxeDNlazNhMWkyczViOCJ9.5ouITJINn2gzkTBpIoO2Yg';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [4.8936041, 52.3727598], // starting position [lng, lat]
        zoom: 6 // starting zoom
    });

    var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

map.on('load', function() {
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>National Park Oosterschelde</strong><p> A nature resort in Zeeland with 37.000 hectares ground. Be carefull not to land in the North sea!</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [3.7112656, 51.640663]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National Landscape Drentsche Aa</strong><p> A nature resort with 10.500 hectares ground in the province Drenthe. Perfect for a landing</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [6.657684102678441, 53.0545317]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National Park Weerribben-Wieden</strong><p> Water nature resort in Giethoorn with 10.500 hectares ground. Be carefull not to disturb the animals when you land!</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [6.025131009572816, 52.7292076]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National park Utrechtse Heuvelrug</strong><p> Is a nature resort in Driebergen-Zeist and Rhenen with 10.0000 hectares ground. More than enough space to land! </p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [5.3257735493997735,52.097598500000004]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National park The Biesbosch</strong><p> A nature resort in Noord-Brabant and Zuid-Holland with 9.000 hectares ground. The Biesbosch is a habitat for waterbirds, be careful not to disturb them</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [4.766498294614355, 51.76507435]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong> National park Drentse-Friese Wold</strong><p> The area of this park lies on the border of the pronvices Drenthe and Friesland. The park has 6.1000 hectares ground. Beautiful area to land!</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [6.24699950099561, 52.906332500000005]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National Park Lauwersmeer</strong><p> A area with a big lake where 100 of diffrent birds live. the Area is 6.000 hectares</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [6.199547705478384, 53.366586600000005]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National park the Veluwe</strong> <p> Is one of the best known nature resort in the Netherlands. The park has 5.500 hectares ground. be careful around the boars!</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [5.83107731249328, 52.079705849999996]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>National park Schiermonikoog</strong><p> The park is on the little island Schiermonikoog. It has 5.400 hectares of ground. A good place to land, but you have to go with the ferry to reach the mainland.</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [6.251427876419555, 53.47983725]
}
}
]
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': '{icon}-15',
'icon-allow-overlap': true
}
});
 
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function(e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
});
});



