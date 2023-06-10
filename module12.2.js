describe ("Test Suite Google Calculator", () => {

  it("Open site, clicking search button", async() => {

    // 1. Open https://cloud.google.com/
    // 2.By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"

    await browser.url('https://cloud.google.com/');
    await browser.setWindowSize(1350, 800);
    await $('//devsite-search/form/div/div/input').click();
    await $('input[name="q"]').setValue("Google Cloud Platform Pricing Calculator");

  });
  
  it("Go to Calculator page", async () => {

    // 3. Start the search by clicking the search button.
    // 4. In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.

    await $('//*[@id="devsite-search-popout-container-id-1"]/div/div/div[2]/button').click();
    await $('//*[@id="devsite-search-popout-container-id-1"]/div/div/div[2]/button').waitForExist({ timeout:1000 });
    await $('[href="https://cloud.google.com/products/calculator"][dir="ltr"]').click();
    await browser.setTimeout({ pageLoad : 5000 });

    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

  });
  
  it("Fill the form", async() => {

    // 5. Activate the COMPUTE ENGINE section at the top of the page
    // 6. Fill in the form with the following data:

    await $("#input-0").setValue("Compute Engine");
    await $("(//li[@id='md-option-0-0'])[1]").click();

    // * Number of instances: 4

    await $("#input_96").setValue('4');
   
    // * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS

    await $("md-select-value[id='select_value_label_88'] span[class='md-select-icon']").click();
    await $("#select_option_98").waitForDisplayed({ timeout : 2000 });
    await $("#select_option_98").click();
 
    // * VM Class: Regular

    await $("md-select-value[id='select_value_label_89'] span[class='md-select-icon']").click();
    await $("md-option[id='select_option_111'] div[class='md-text']").waitForDisplayed({ timeout : 2000 });
    await $("md-option[id='select_option_111'] div[class='md-text']").click();
  
    // * Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)

    await $("md-select-value[id='select_value_label_91'] span[class='md-select-icon']").click();
    await $("md-option[id='select_option_212'] div[class='md-text ng-binding']").waitForDisplayed({ timeout : 2000 });
    await $("md-option[id='select_option_212'] div[class='md-text ng-binding']").click();
    await browser.scroll(0, 400);
    await $("md-select-value[id='select_value_label_92'] span[class='md-select-icon']").click();
    await $("(//div[normalize-space()='n1-standard-8 (vCPUs: 8, RAM: 30GB)'])[1]").waitForDisplayed({ timeout : 2000 });
    await $("(//div[normalize-space()='n1-standard-8 (vCPUs: 8, RAM: 30GB)'])[1]").click();
    await browser.scroll(0, 300);

    // * Select Add GPUs: Number of GPUs: 1, GPU type: NVIDIA Tesla V100

    await $('md-checkbox[ng-model="listingCtrl.computeServer.addGPUs"]').click();
    await $('md-select[placeholder="GPU type"]').waitForDisplayed({ timeout : 500 });
    await $('md-select[placeholder="GPU type"]').click();
    await $('md-option[value="NVIDIA_TESLA_V100"]').waitForDisplayed({ timeout : 2000 });
    await $('md-option[value="NVIDIA_TESLA_V100"]').click();
    await $('md-select[placeholder="Number of GPUs"]').click();
    await $("(//div[normalize-space()='1'])[1]").waitForDisplayed({ timeout : 2000 });
    await $("(//div[normalize-space()='1'])[1]").click();

    // * Local SSD: 2x375 Gb

    await browser.scroll(0, 200);
    await $("/html[1]/body[1]/md-content[1]/md-card[1]/div[1]/md-card-content[1]/div[2]/div[1]/md-card[1]/md-card-content[1]/div[1]/div[1]/form[1]/div[15]/div[1]/md-input-container[1]/md-select[1]/md-select-value[1]").click();
    await $("(//div[normalize-space()='2x375 GB'])[1]").waitForDisplayed({ timeout : 2000 });
    await $("(//div[normalize-space()='2x375 GB'])[1]").click();

    // * Datacenter location: Frankfurt (europe-west3)

    await $("md-select-value[id='select_value_label_94'] span[class='md-select-icon']").click();
    await $("//div[@id='select_container_130']//md-content[@class='_md']").waitForDisplayed({ timeout : 1000 });
    await $("//div[@id='select_container_130']//md-content[@class='_md']").scrollIntoView();
    await $("#select_option_253").waitForDisplayed({ timeout : 1000 });
    await $("#select_option_253").click();

    // * Commited usage: 1 Year

    await $("md-select-value[id='select_value_label_95'] div[class='md-text']").click();
    await $("//md-option[@id='select_option_134']//div[@class='md-text'][normalize-space()='1 Year']").waitForDisplayed({ timeout : 1000 });
    await $("//md-option[@id='select_option_134']//div[@class='md-text'][normalize-space()='1 Year']").click();

    // 7. Click Add to Estimate

    await browser.scroll(0, 50);
    await $("form[name='ComputeEngineForm'] div[class='layout-align-end-start layout-row'] button[type='button']").click();
    await browser.setTimeout({ pageLoad : 5000 });

    // 8. Select EMAIL ESTIMATE

    await $('button[title="Email Estimate"]').click();
    await browser.setTimeout({ pageLoad : 3000 });

  });
  
  it("Generate, Copy and Paste Email", async () => {

    // 9. In a new tab, open https://10minutemail.com or a similar service for generating temporary emails
   
    await browser.newWindow('https://tempmail.plus');
    await browser.setTimeout({ pageLoad : 5000 });
    await browser.setWindowSize(1350, 800);

    // 10. Copy the mailing address generated in 10minutemail(*I choose a similar service for generating temporary emails)

    await $('#pre_copy').click();
    await browser.setTimeout({ pageLoad : 3000 });

    await browser.switchWindow('https://cloud.google.com/');
    await browser.setTimeout({ pageLoad : 3000 });

    // 11. Return to the calculator, in the Email field enter the address from the previous paragraph
   
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await $('input[type="email"]').click();
    await browser.keys(['Control', 'v']);
    
  });
  
  it("Send Email", async () => {

    // 12. Press SEND EMAIL

    await $('button[ng-disabled="emailForm.$invalid"]').click();

  });
  
  it("Check cost matches", async () => {

    // 13. Wait for the letter with the cost calculation and check that the Total Estimated Monthly Cost in the letter matches what is displayed in the calculator

    await browser.switchWindow('https://tempmail.plus');
    await browser.scroll(0, 50);
    await $('#container-body > div > div.inbox > div.mail > div > div.from.col-9.col-md-4 > img').waitForDisplayed({ timeout : 20000 });
    await $('#container-body > div > div.inbox > div.mail > div > div.from.col-9.col-md-4 > img').click();
    await browser.pause(1000);
    await browser.scroll(0, 400);
    const TotalCostMail = $('#info > div.overflow-auto.mb-20 > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1)').getText();

    
    await browser.switchWindow('https://cloud.google.com/');
    await browser.setTimeout({ pageLoad : 3000 });
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    const TotalCostCalculator = $('#m_2604047346077808719mobilepadding > td > table > tbody > tr:nth-child(2)').getText();


    await expect(TotalCostCalculator).toEqual(TotalCostMail);


});
})

 