// Prevent double initialization in CodeSandbox
if (L.DomUtil.get("map") !== null) {
  L.DomUtil.get("map")._leaflet_id = null;
}

// Initialize the map
const map = L.map("map").setView([36.21851062033088, -81.68359844147935], 20);

// Google Maps tile layer
L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

// Custom icon
const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/6798/6798116.png",
  iconSize: [38, 38],
});

// Markers
L.marker([40.05517113654225, -85.98528012942833], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://th.bing.com/th/id/OIP.h5BYzoCLipxtDQTDtko3FQHaHa?w=142&h=150&c=6&r=0&o=7&dpr=1.5&pid=1.7&rm=3" class="popup-img" />
      <h3>Noblesville, IN</h3>
      <p>Jeff Pea (PIC Manager)</p>
    </div>
  `);

L.marker([35.62245530831662, -80.77682864445171], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/y74GHJBQUL7-iOm4U7jLyPfMaaLYrekWy3EQ6vBQk8U/112/208-Manufacturers-Blvd-Mooresville-NC-Primary-Photo-1-HighDefinition.jpg" class="popup-img" />
      <h3>Mooresville, NC</h3>
      <p>Kevin Brennan (Innovation PM)</p>
    </div>
  `);

L.marker([37.3072235797037, -77.38041402905361], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/zXq5gxAtVofPB9y6yIWv94_xlgR5ml15pHAifoQLpMM/110/1703-Ruffin-Mill-Rd-Colonial-Heights-VA-Primary-Photo-1-Large.jpg" class="popup-img" />
      <h3>Richmond, VA</h3>
      <p>Gabriel Wiggins (PIC Manager)</p>
    </div>
  `);

L.marker([33.7609894450294, -84.56533010217149], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/RJVctx4RAZg9HtcamS9mUQCc3BFgpCuRKCnvh1dr5Y8/116/335-Riverside-Pky-Austell-GA-Primary-Photo-1-LargeHighDefinition.jpg" class="popup-img" />
      <h3>Austell, GA</h3>
      <p>Colin Heron (Innovation Manager)</p>
    </div>
  `);
