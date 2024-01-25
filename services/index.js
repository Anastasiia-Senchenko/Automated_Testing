const BasePage = require('./page-objects/basePage');
const BaseElement = require('./helpers/baseElement');
const PastebinPage = require('./page-objects/pastebinPage');
const Waits = require('./helpers/waits');
const constants = require('./helpers/constants');
const MainPage = require('./page-objects/mainPage');
const PastebianCaretedPostPage = require('./page-objects/pastebianCreatedPostPage');

module.exports = {
  BasePage,
  BaseElement,
  PastebinPage,
  Waits,
  constants,
  MainPage,
  PastebianCaretedPostPage
}