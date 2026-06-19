// Prevent double initialization in CodeSandbox
if (L.DomUtil.get("map") !== null) {
  L.DomUtil.get("map")._leaflet_id = null;
}

// Initialize the map
const map = L.map("map").setView([34.162084, -90.476038], 5);

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
L.marker([40.039009, -85.981193], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://awscloudfront.mangoapps.com/pulse/gaylor/attachments/24859441/thumbnail/0/1781795298626_webp_preview.webp?bucket_name=mangospring&module_salt=allqOTRmTTl1bkZIUW5PT2dhMlFiS1YrSG1kRlV5SklOUUVQdG1yQ2orRHN3OHdUTXdiYXBoYUw5cVdmZjRnRi0tTTlhT2t0YlQrTTdKWFA0Mi9wV2pSUT09" class="popup-img" />
      <h3>IND - 17230 Kraft Ct, Noblesville, IN 46060</h3>
      <p>Jeff Pea (PIC Manager)</p>
    </div>
  `);

L.marker([35.62245530831662, -80.77682864445171], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/y74GHJBQUL7-iOm4U7jLyPfMaaLYrekWy3EQ6vBQk8U/112/208-Manufacturers-Blvd-Mooresville-NC-Primary-Photo-1-HighDefinition.jpg" class="popup-img" />
      <h3>CLT - 208 Manufacturers Blvd, Mooresville, NC 28115</h3>
      <p>Kevin Brennan (Innovation PM)</p>
    </div>
  `);

L.marker([37.3072235797037, -77.38041402905361], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/zXq5gxAtVofPB9y6yIWv94_xlgR5ml15pHAifoQLpMM/110/1703-Ruffin-Mill-Rd-Colonial-Heights-VA-Primary-Photo-1-Large.jpg" class="popup-img" />
      <h3>RIC - 1703 Ruffin Mill Rd, South Chesterfield, VA 23834</h3>
      <p>Gabriel Wiggins (PIC Manager)</p>
    </div>
  `);

L.marker([33.7609894450294, -84.56533010217149], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/RJVctx4RAZg9HtcamS9mUQCc3BFgpCuRKCnvh1dr5Y8/116/335-Riverside-Pky-Austell-GA-Primary-Photo-1-LargeHighDefinition.jpg" class="popup-img" />
      <h3>ATL - 335 Riverside Pkwy, Austell, GA 30168</h3>
      <p>Colin Heron (Innovation Manager)</p>
    </div>
  `);

L.marker([31.51164860781731, -98.79305397662206], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://awscloudfront.mangoapps.com/pulse/gaylor/attachments/24866818/thumbnail/0/1781890599077_webp_preview.webp?bucket_name=mangospring&module_salt=TnE2Mk95bDBnWmlYR0MyME81SXJZWndJbTVQYzF2d0YvMStydnRwQUZtZ3podUpoSER1bFl0NzRtb2JHcjdqSC0tTTlhT2t0YlQrTTdKWFA0Mi9wV2pSUT09" class="popup-img" />
      <h3>Somewhere in Texas</h3>
      <p>Someone probably</p>
    </div>
  `);
