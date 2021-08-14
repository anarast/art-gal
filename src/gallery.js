import "aframe";
const axios = require("axios");

const NUM_PAINTINGS = 6;

for (let i = 1; i <= NUM_PAINTINGS; i++) {
  AFRAME.registerComponent(`painting-${i}`, {});
}

async function load_images() {
  const response = await axios.get("https://artapi.saratan.me/photos");
  const urls = response.data.urls;

  for (let i = 0; i < NUM_PAINTINGS; i++) {
    const painting = document.querySelector(`#painting-${i + 1}`);
    painting.setAttribute("src", urls[i]);

    // Parse URLs to get image description
    const parsedUrl = urls[i].split("://").pop();
    const splitUrl = parsedUrl.split("/")[2];
    const wordArray = splitUrl.split("-");
    const description = `${wordArray[0]} ${wordArray[1]} ${wordArray[2]} ${wordArray[3]} ${wordArray[4]}`;

    const descriptionElement = document.querySelector(`#description-${i + 1}`);
    descriptionElement.setAttribute("value", description);
  }
}

load_images();
