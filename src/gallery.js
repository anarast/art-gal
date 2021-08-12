import "aframe";
import "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.shutterstock.com/search/mystery");
  await page.waitForSelector(".page_inner");
  await page.$$eval("img", (images) => {
    images = images.filter((image) => image.src);
    console.log(images);
  });
  await browser.close();
})();

AFRAME.registerComponent("painting-1", {
  init: function () {
    console.log("Hi sara!");

    this.a_image = document.querySelector("#painting-1");
    this.a_image.setAttribute(
      "src",
      "https://image.shutterstock.com/image-photo/girl-black-hat-holds-her-260nw-1910132041.jpg"
    );
  },
});
