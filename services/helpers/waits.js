class Waits {
  async waitForDisplayed (element, timeout = 5000){
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Error: element ${await element.selector} not found on the page '${await browser.getUrl()}'`,
    });
  }
}
module.exports = Waits;