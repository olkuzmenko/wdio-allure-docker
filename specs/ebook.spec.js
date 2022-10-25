const ResourcesPage = require('../pageobjects/resources.page.js');
const EbookPage = require('../pageobjects/ebook.page');
const Randomize = require('../helper/randomize')

describe('Ebook page features', () => {
    before('close cookies', async () => {
        if(ResourcesPage.Cookies.isExisting()){
            ResourcesPage.Cookies.click()
        }
    })
    
    it('Should Fill ebook form', async () => {
    ResourcesPage.openResourcesPage();
    await ResourcesPage.clickEbookButton();
    await expect(browser).toHaveUrlContaining('ebook-the-better-twilio-alternative');
    await EbookPage.setFirstName(Randomize.randomeString());
    await EbookPage.setLastName(Randomize.randomeString());
    await EbookPage.setCompanyName(Randomize.randomeString());
    await EbookPage.setCompanyEmail(Randomize.randomeEmail());
    await EbookPage.clickSendContentButton()
    await expect(browser).toHaveTitle('Form Fill Confirmation')
    });

    it('Should сheck social link', async () => {
        ResourcesPage.openResourcesPage();
        await ResourcesPage.clickEbookButton();
        await expect(browser).toHaveUrlContaining('ebook-the-better-twilio-alternative');
        await EbookPage.clickFacebookButton();
        await browser.switchWindow('facebook')
        await expect(browser).toHaveUrlContaining('facebook');
        await browser.switchWindow('telnyx')
        await EbookPage.clickLinkedinButton();
        await browser.switchWindow('linkedin')
        await expect(browser).toHaveUrlContaining('linkedin');
        await browser.switchWindow('telnyx')
        await EbookPage.clickTwitterButton();
        await browser.switchWindow('twitter')
        await expect(browser).toHaveUrlContaining('twitter');
    });
})