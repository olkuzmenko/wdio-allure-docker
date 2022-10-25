const MainPage = require('../pageobjects/main.page');
const CareerPage = require('../pageobjects/career.page')

describe('Career page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })
    
    it('Should open position in new page', async () => {
        MainPage.openMainPage();
        await MainPage.clickCareerPage();
        await expect(browser).toHaveUrl('https://telnyx.com/company/careers');
        await CareerPage.clickFirstPosition();
        await browser.switchWindow('boards.greenhouse.io')
        await expect(browser).toHaveTitleContaining('Job Application for', 'at Telnyx')
    });
})