const scraper = {
  url: 'https://www.scribd.com',
  async scraper(browser) {
    try{
    let page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    console.log(`Navigating to ${this.url}...`);
    

    await page.goto(this.url,{timeout: 90000
  });
  await page.waitForSelector('.logo_container');
   

    // await page.waitForSelector('.app-content');

    console.log('page loaded');

    const title = await page.evaluate(async () => {
      return document.querySelector('._3Ny5GS').textContent;
    });

    console.log(title);

    const authors = await page.evaluate(async () => {
      return document.querySelector('.rGmJST')
        .textContent;
    });
    

   

    // const video = await page.evaluate(async () => {
    //   return document.querySelector('iframe').src;
    // });

    // console.log({ video: video.split('/').pop() });

    // const price = await page.evaluate(async () => {
    //   return document.querySelector('.pd-detail__price').textContent;
    // });

    // console.log({ price });

    // const button = await page.$('#view-review');

    // setTimeout(() => {
    //   button.click();
    // }, 3000);

    // const reviewElements = await page.$$('.review-o');
    // const reviews = [];

    // for (let i = 0; i < reviewElements.length; i++) {
    //   const name = await reviewElements[i].$eval(
    //     '.review-o__name',
    //     (v) => v.textContent,
    //   );

    //   const text = await reviewElements[i].$eval(
    //     '.review-o__text',
    //     (v) => v.textContent,
    //   );

    //   const ratingText = await reviewElements[i].$eval(
    //     '.review-o__rating span',
    //     (v) => v.textContent,
    //   );

    //   const ratingStars = await reviewElements[i].$$(
    //     '.review-o .fas',
    //   );

    //   console.log({
    //     name,
    //     text,
    //     ratingText: ratingText.replace('(', '').replace(')', ''),
    //     ratingStars: ratingStars.length,
    //   });
    // }
  }
  catch(err){
    console.error(err)
  }
  },
};

module.exports = scraper;
