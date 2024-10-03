let map = L.map('map').setView([46.15963, -1.15128], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


data.forEach((markers) => {
    let marker = L.marker([markers.fields.geo_point_2d[1], markers.fields.geo_point_2d[0]]).addTo(map);
    marker.bindPopup(markers.fields.station_nom + "\n" + markers.fields.geo_point_2d[0] + "\n" + markers.fields.geo_point_2d[1]);
});

