const {Key} = require('webdriverio');
const Waits = require('./waits');

class BaseElement extends Waits {
  constructor() {
    super();
  }
  async insertValue(element, value) {
    await this.waitForDisplayed(element);
    await element.setValue(value);
  }
  async clickElement(element) {
    await this.waitForDisplayed(element);
    await element.click();
  }
  async clearValue(element) {
    await this.clickElement(element);
    await browser.keys([Key.Control, 'a']);
    await browser.keys([Key.Backspace]);
  }
  async getText(element) {
    await this.waitForDisplayed(element);
    return await element.getText();
  }
  async scroll(element) {
    await element.scrollIntoView();
  }
  async moveTo(element, elementToDisplay) {
    await this.waitForDisplayed(element);
    await element.moveTo();
    if (elementToDisplay) {
      await this.waitForDisplayed(elementToDisplay);
    }
  }
  async selectDropDownMenuItem(dropDownMenuButton, dropDownMenuItem) {
    await this.clickElement(dropDownMenuButton);
    await this.clickElement(dropDownMenuItem);
  }
}
module.exports = BaseElement;