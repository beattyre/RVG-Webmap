// Load map variable and set extent
		var map;
		function initmap() {
			map = new L.map('mapDiv');
			var osmTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			var osmAttributes = 'Map created by <a href="https://www.linkedin.com/in/beattyre/" target="_blank">Robert Beatty</a> &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>';
			var osm = L.tileLayer(osmTile, {
				minZoom: 8,
				maxZoom: 20,
				attribution: osmAttributes,
			});
			map.setView(new L.LatLng(37.2743, -79.9575), 11);
			map.addLayer(osm);
		};
	
	initmap();
		map.attributionControl.setPosition('topleft');
		map.zoomControl.setPosition('topleft');


// Document Ready - jQuery
$(document).ready(function(){

	// Sidebar Toggle
	$('#sidebar-toggle').on('click', function(){
		var sidebarCheck = $('#sidebar').css('display');
		if (sidebarCheck == 'block'){
			$("#sidebar").css('display', 'none');
			$("#mapDiv").toggleClass('col-sm-9 col-lg-9 col-sm-12 col-lg-12');
		}
		else{
			$("#sidebar").css('display', 'block');
			$("#mapDiv").toggleClass('col-sm-12 col-lg-12 col-sm-9 col-lg-9');
		};
    map.invalidateSize();
    return false;
	});

	// Layer Checkbox Stuff
	$("input:checkbox[name='layer-cont']").on('change', function(){
		var visibleLayers = [];
		if ($('#'+$(this).attr('id')).is(':checked')) {
			$(this).toggleClass("glyphicon-ok-sign glyphicon-remove-sign");
		}
		else {
			$(this).toggleClass("glyphicon-remove-sign glyphicon-ok-sign");
		}
	});


});

