const MainPage = require('../pageobjects/main.page');
const PricingElasticSipPage = require('../pageobjects/pricingElasticSip.page')
const Randomize = require('../helper/randomize')

describe('Price, SIP Trunking page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })

    it('Should fill Sip Trunking Price form', async () => {
        PricingElasticSipPage.openPricingElasticsPage();
        await PricingElasticSipPage.setFirstName(Randomize.randomeString());
        await PricingElasticSipPage.setLastName(Randomize.randomeString());
        await PricingElasticSipPage.setEmail(Randomize.randomeEmail());
        await PricingElasticSipPage.clickDownloadButton();
        await expect(PricingElasticSipPage.successMessage).toBeDisplayed();
        await expect(PricingElasticSipPage.successMessage).toHaveText("Thank you. We'll email you pricing right away!")
    });

    it('Should send empty Trunking Price form', async () => {
        PricingElasticSipPage.openPricingElasticsPage();
        await PricingElasticSipPage.clickDownloadButton();
        await expect(PricingElasticSipPage.errorMessage).toBeDisplayed();
    });
})