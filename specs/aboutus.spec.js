const MainPage = require('../pageobjects/main.page');
const AboutUsPage = require('../pageobjects/aboutUs.page');

describe('About us page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })
    it('Should download the full set', async () => {
        MainPage.openMainPage();
        await MainPage.clickAboutUs();
        await expect(browser).toHaveUrl('https://telnyx.com/company/about');
        await AboutUsPage.clickSeeTheBrandLink();
        await expect(browser).toHaveUrl('https://telnyx.com/company/our-brand');
        await AboutUsPage.clickDownloadSetLink();
        await expect(AboutUsPage.downloadSetLink).toHaveAttributeContaining('href', '.zip')
    });




});