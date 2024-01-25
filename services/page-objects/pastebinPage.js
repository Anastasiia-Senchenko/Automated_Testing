const BasePage = require('./basePage');
class PastebinPage extends BasePage {
  constructor() {
    super();
  }
  get textForm() {
    return $('#postform-text');
  }
  get buttonCreateNewPaste() {
    return $("//button[text()='Create New Paste']");
  }
  get syntaxHighlightingDropDown() {
    return $("#select2-postform-format-container");
  }
  get syntaxBash() {
    return $("//li[text()='Bash']");
  }
  get dropDownExpiration() {
    return $('#select2-postform-expiration-container');
  }
  get expirationTenMinutes() {
    return $("//li[text()='10 Minutes']");
  }
  get tittePastName() {
    return $("input[name='PostForm[name]']");
  }
}
module.exports = PastebinPage;