import "aframe";
const axios = require("axios");

const NUM_PAINTINGS = 6;

for (let i = 0; i < NUM_PAINTINGS; i++) {
  AFRAME.registerComponent(`painting-${i}`, {});
}

async function load_images() {
  console.log("Calling api");
  const response = await axios.get("http://localhost:8000/photos");
  const urls = response.data.urls;

  for (let i = 0; i < NUM_PAINTINGS; i++) {
    const painting = document.querySelector(`#painting-${i + 1}`);
    painting.setAttribute("src", urls[i]);

    // Parse URLs to get image description
    const parsedUrl = urls[i].split("://").pop();
    console.log(parsedUrl);
    const splitUrl = parsedUrl.split("/")[2];
    console.log(splitUrl);
    const splitDescription = splitUrl.split("-");
    console.log(splitDescription);
    const description =
      splitDescription[0] +
      " " +
      splitDescription[1] +
      " " +
      splitDescription[2] +
      " " +
      splitDescription[3] +
      " " +
      splitDescription[4];
    console.log(description);

    const descriptionElement = document.querySelector(`#description-${i + 1}`);
    descriptionElement.setAttribute("value", description);
  }
}

load_images();
