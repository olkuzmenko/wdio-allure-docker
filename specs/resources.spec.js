const ResourcesPage = require('../pageobjects/resources.page.js');
const EbookPage = require('../pageobjects/ebook.page');
const Randomize = require('../helper/randomize')

describe('Resources page features', () => {
    before('close cookies', async () => {
        if(ResourcesPage.Cookies.isExisting()){
            ResourcesPage.Cookies.click()
        }
    })

    it('Should filter by content', async () => {
        ResourcesPage.openResourcesPage();
        await ResourcesPage.filterItemOne()
        await ResourcesPage.filterItemTwo()
        await ResourcesPage.filterItemThree()
        await ResourcesPage.filterItemFour() 
    });

    it('Should subscribe to email subscription', async () => {
        ResourcesPage.openResourcesPage();
        await ResourcesPage.EnterEmail('olqwergsv@gmail.com');
        await ResourcesPage.clickSubscribeButton();
        await expect(await ResourcesPage.subscriptionMessage).toExist()
        await expect(await ResourcesPage.subscriptionMessage).toHaveTextContaining('You have successfully subscribed')
    });

    it('Should subscribe vith empty email', async () => {
        ResourcesPage.openResourcesPage();
        await ResourcesPage.EnterEmail('');
        await ResourcesPage.clickSubscribeButton();
        await expect(await ResourcesPage.subscriptionMessage).toExist()
        await expect(await ResourcesPage.subscriptionMessage).toHaveTextContaining('Please enter a valid email')
    });

});