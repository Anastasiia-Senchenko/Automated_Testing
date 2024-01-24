//Install  WebdriverIO  and do the following task:
//(I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:
//1. Open https://pastebin.com or a similar service in any browser
//2. Create a New Paste with the following details:
//* Code: "Hello from WebDriver"
//* Paste Expiration: "10 Minutes"
//* Paste Name / Title: "helloweb"

describe("Test suite", () => {

  it("First test", async() => {
    await browser.url("https://pastebin.com");
    await $("#postform-text").setValue("Hello from WebDriver");
    await $('#select2-postform-expiration-container').click();
    await $("//li[text()='10 Minutes']").click();
    await $("input[name='PostForm[name]']").setValue("helloweb");
    await $("//button[text()='Create New Paste']").click();

  });
});

