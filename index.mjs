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
L.marker([40.039009, -85.981193], { icon: customIcon }).addTo(map).bindPopup(`
    <div class="popup">
      <img src="https://awscloudfront.mangoapps.com/pulse/gaylor/attachments/24859441/thumbnail/0/1781795298626_webp_preview.webp?bucket_name=mangospring&module_salt=allqOTRmTTl1bkZIUW5PT2dhMlFiS1YrSG1kRlV5SklOUUVQdG1yQ2orRHN3OHdUTXdiYXBoYUw5cVdmZjRnRi0tTTlhT2t0YlQrTTdKWFA0Mi9wV2pSUT09" class="popup-img" />
      <h3>IND PIC</h3>
      <h4>17230 Kraft Ct, Noblesville, IN 46060</h4>
      <p>Jeff Pea (PIC Manager)</p>
      <p>jpea@gaylor.com</p>
      <p>317-716-3719</p>
      </div>
  `);

L.marker([35.62245530831662, -80.77682864445171], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/y74GHJBQUL7-iOm4U7jLyPfMaaLYrekWy3EQ6vBQk8U/112/208-Manufacturers-Blvd-Mooresville-NC-Primary-Photo-1-HighDefinition.jpg" class="popup-img" />
      <h3>CLT PIC</h3>
      <h4>208 Manufacturers Blvd, Mooresville, NC 28115</h4>
      <p>Kevin Brennan (Innovation PM)</p>
      <p>kbrennan@gaylor.com</p>
      <p>516-582-5981</p>
      </div>
  `);

L.marker([37.3072235797037, -77.38041402905361], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/zXq5gxAtVofPB9y6yIWv94_xlgR5ml15pHAifoQLpMM/110/1703-Ruffin-Mill-Rd-Colonial-Heights-VA-Primary-Photo-1-Large.jpg" class="popup-img" />
      <h3>RIC PIC</h3>
      <h4>1703 Ruffin Mill Rd, South Chesterfield, VA 23834</h4>
      <p>Gabriel Wiggins (PIC Manager)</p>
      <p>gwiggins@gaylor.com</p>
      <p>804-316-0427</p>
      </div>
  `);

L.marker([33.7609894450294, -84.56533010217149], { icon: customIcon }).addTo(
  map
).bindPopup(`
    <div class="popup">
      <img src="https://images1.loopnet.com/i2/RJVctx4RAZg9HtcamS9mUQCc3BFgpCuRKCnvh1dr5Y8/116/335-Riverside-Pky-Austell-GA-Primary-Photo-1-LargeHighDefinition.jpg" class="popup-img" />
      <h3>ATL PIC</h3>
      <h4>335 Riverside Pkwy, Austell, GA 30168</h4>
      <p>Colin Heron (Innovation PM)</p>
      <p>cheron@gaylor.com</p>
      <p>770-310-9084</p>
      </div>
  `);

L.marker([31.513077, -103.452706], { icon: customIcon }).addTo(map).bindPopup(`
  <div class="popup">
    <img src="https://awscloudfront.mangoapps.com/pulse/gaylor/attachments/24866818/thumbnail/0/1781890599077_webp_preview.webp?bucket_name=mangospring&module_salt=TnE2Mk95bDBnWmlYR0MyME81SXJZWndJbTVQYzF2d0YvMStydnRwQUZtZ3podUpoSER1bFl0NzRtb2JHcjdqSC0tTTlhT2t0YlQrTTdKWFA0Mi9wV2pSUT09" class="popup-img" />
      <h3>TX PIC</h3>
      <h4>3013 Ranch Road FM 516, Barstow, TX 79719</h4>
      <p>James Cotter (PIC Manager)</p>
      <p>jcotter@gaylor.com</p>
      <p>386-627-5349</p>
      </div>
`);
