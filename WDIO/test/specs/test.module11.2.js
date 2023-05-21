//(Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

describe ("Test", () => {

  it("Open page", async() => {
    await browser.url("https://pastebin.com");
    await browser.scroll(0, 700);
    await $('#select2-postform-expiration-container').click();
    await $("//li[text()='10 Minutes']").click();
    await browser.pause(3000);
    await $("input[name='PostForm[name]']").setValue("how to gain dominance among developers");
    await browser.pause(3000); 

    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual("how to gain dominance among developers");
  });

})