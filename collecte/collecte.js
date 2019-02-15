var mymap = L.map('mapid').setView([45.5017, -73.5673], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWVpc3Rlcm11a2EiLCJhIjoiY2l4NzM0cXF0MDE2dDJ0bGtzdG5idXFpZCJ9.GTppZKD4hVT9UKLgDdUJ9w'
}).addTo(mymap);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.TYPE_DECHET) {
        var typeDeDechet = feature.properties.TYPE_DECHET;
        var message = feature.properties.MESSAGE_FR;
        var popupContent = `<strong>Type de dechet:</strong> ${typeDeDechet}<br />${message}`;
        layer.bindPopup(popupContent);
    }
}

$.getJSON("collecte-des-matieres-recyclables.geojson", function(data) {

    L.geoJSON(data.features, {
        onEachFeature: onEachFeature
    }).addTo(mymap);
})