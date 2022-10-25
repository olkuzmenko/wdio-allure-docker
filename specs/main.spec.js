const MainPage = require('../pageobjects/main.page');

describe('Main page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })

    it('Should check if products blocks are clickable', async () => {
        MainPage.openMainPage();
        await expect(MainPage.voiceApiblock).toBeClickable();
        await expect(MainPage.voiceApiblock).toBeEnabled();
        await expect(MainPage.elasticSIPblock).toBeClickable();
        await expect(MainPage.elasticSIPblock).toBeEnabled();
        await expect(MainPage.messagingApiBlock).toBeClickable();
        await expect(MainPage.messagingApiBlock).toBeEnabled();
        await expect(MainPage.exploreInternationalNumbersBlock).toBeClickable();
        await expect(MainPage.exploreInternationalNumbersBlock).toBeEnabled();
        await expect(MainPage.videoApiBlock).toBeClickable();
        await expect(MainPage.videoApiBlock).toBeEnabled();
        await expect(MainPage.WirelessBlock).toBeClickable();
        await expect(MainPage.WirelessBlock).toBeEnabled();
    });


});