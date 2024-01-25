const BasePage = require('./basePage');
class PastebianCaretedPostPage extends BasePage {
  constructor() {
    super();
  }
  get postLineText() {
    return $("//div[@class = 'de1']");
  }
  get postLineTitle() {
    return $("div[class='info-top'] h1");
  }
  get selectedSyntax() {
    return $("//a[text()='Bash']");
  }
}
module.exports = PastebianCaretedPostPage;