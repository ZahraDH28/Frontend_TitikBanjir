// Inisialisasi peta Leaflet
const map = L.map("map").setView([-6.9175, 107.6191], 12);

// Tambahkan tile map OSM
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Ambil data GeoJSON dari backend
fetch("http://localhost:4000/api/map/geojson")
  .then(res => res.json())
  .then(data => {

    // Tambahkan geoJSON ke peta dengan marker
    L.geoJSON(data, {

      // Untuk point, buat marker
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng)
          .bindPopup(
            `<b>Koordinat</b><br>
            Lat: ${latlng.lat}<br>
            Lng: ${latlng.lng}`
          );
      }

    }).addTo(map);
  })
  .catch(err => console.error("Error ambil data GeoJSON:", err));
