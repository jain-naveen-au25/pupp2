const browserObject = require("./browser");

const scraperController = require("./pageController");

//Start the browser and create a browser instance
let async rfunctionun()
let browserInstance = browserObject.startBrowser();
console.log(browserInstance)

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
