const { PastebinPage, constants, MainPage, PastebianCaretedPostPage} = require('services');

const pastebinPage = new PastebinPage();
const mainPage = new MainPage();
const pastebianCaretedPostPage = new PastebianCaretedPostPage();

describe('Test suite: Pastebian', () => {
  beforeEach(async () => {
    await mainPage.navigate('https://pastebin.com')
  });
  it('Created a New Past is displayed', async () => {
    await mainPage.insertValue(pastebinPage.textForm, constants.textPastebian.textNewPostFirst);
    await mainPage.selectDropDownMenuItem(pastebinPage.dropDownExpiration, pastebinPage.expirationTenMinutes);
    await mainPage.insertValue(pastebinPage.tittePastName, constants.textPastebian.titleNameFirst);
    await mainPage.clickElement(pastebinPage.buttonCreateNewPaste);
    expect(await pastebianCaretedPostPage.postLineText).toBeDisplayed();
  });
  it('New past, title, and syntax matches entered data', async () => {
    await mainPage.insertValue(pastebinPage.textForm, constants.textPastebian.textNewPostSecond);
    await mainPage.selectDropDownMenuItem(pastebinPage.syntaxHighlightingDropDown, pastebinPage.syntaxBash);
    await mainPage.selectDropDownMenuItem(pastebinPage.dropDownExpiration, pastebinPage.expirationTenMinutes);
    await mainPage.insertValue(pastebinPage.tittePastName, constants.textPastebian.titleNameSecond);
    await mainPage.clickElement(pastebinPage.buttonCreateNewPaste);
    expect(await pastebianCaretedPostPage.postLineTitle).toHaveText(constants.textPastebian.titleNameSecond);
    expect(await pastebianCaretedPostPage.postLineText).toHaveText(constants.textPastebian.textNewPostSecond);
    expect(await pastebianCaretedPostPage.syntaxBash).toBeDisplayed();
  })
});

