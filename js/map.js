L.mapbox.accessToken = 'pk.eyJ1IjoiZm9vdGJhbGxzZWFzb24iLCJhIjoiZjllYU1aRSJ9.E8-iqKYixOeTL2bBAf7QgQ';
    var map = L.mapbox.map('map', 'mapbox.streets', {
        center: [50.57601, 30.51018]
        zoom: 20
    });

    L.marker([50.47501, 30.51018]).bindLabel('Office').addTo(map);
