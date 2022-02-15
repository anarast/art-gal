import "aframe";
const axios = require("axios");

const NUM_PAINTINGS = 6;

for (let i = 1; i <= NUM_PAINTINGS; i++) {
  AFRAME.registerComponent(`painting-${i}`, {});
}

async function load_images() {
  const response = await axios.get("https://artapi.saratan.me/photos");
  const image_data = response.data.image_data;

  for (let i = 0; i < NUM_PAINTINGS; i++) {
    const painting = document.querySelector(`#painting-${i + 1}`);
    painting.setAttribute("src", image_data[i]["url"]);

    const description = image_data[i]["description"];
    const descriptionElement = document.querySelector(`#description-${i + 1}`);
    descriptionElement.setAttribute("value", description);
  }
}

load_images();
