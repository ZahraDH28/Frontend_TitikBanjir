// Inisialisasi peta Leaflet
const map = L.map("map").setView([-6.9175, 107.6191], 12);

// Tambahkan tile map OSM
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Data GeoJSON statis untuk titik banjir
const floodData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [107.6191, -6.9175]
      },
      "properties": {
        "name": "Titik Banjir 1",
        "severity": "high"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [107.6291, -6.9275]
      },
      "properties": {
        "name": "Titik Banjir 2",
        "severity": "medium"
      }
    }
  ]
};

// Tambahkan geoJSON ke peta dengan marker
L.geoJSON(floodData, {
  // Untuk point, buat marker
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng)
      .bindPopup(
        `<b>${feature.properties.name}</b><br>
        Severity: ${feature.properties.severity}<br>
        Lat: ${latlng.lat.toFixed(4)}<br>
        Lng: ${latlng.lng.toFixed(4)}`
      );
  }
}).addTo(map);

console.log("Map loaded successfully!");
