import "aframe";
const axios = require("axios");

const NUM_PAINTINGS = 6;

for (let i = 0; i < NUM_PAINTINGS; i++) {
  AFRAME.registerComponent(`painting-${i}`, {});
}

async function load_images() {
  console.log("Calling api");
  const response = await axios.get("http://localhost:8000/photo");
  const urls = response.data.urls;

  for (let i = 0; i < NUM_PAINTINGS; i++) {
    const painting = document.querySelector(`#painting-${i + 1}`);
    painting.setAttribute("src", urls[i]);
  }
}

load_images();
