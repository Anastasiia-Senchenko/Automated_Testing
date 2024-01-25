const BaseElement = require('../helpers/baseElement');

module.exports = class basePage extends BaseElement {
  constructor() {
    super();
  }
  async navigate(path) {
    await browser.url(path);
  }
};