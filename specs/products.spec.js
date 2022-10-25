const MainPage = require('../pageobjects/main.page');
const ProductsPage = require('../pageobjects/products.page')

describe('About us page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })
    
    it('Should fill form cloud-vpn', async () => {
        MainPage.openMainPage();
        await MainPage.clickExploreProductsButton();
        await expect(browser).toHaveUrl('https://telnyx.com/products');
        await ProductsPage.clickCloudVpnButton();
        await expect(browser).toHaveUrl('https://telnyx.com/products/cloud-vpn');
        await ProductsPage.ClickAskUsAboutYourUseCaseButton();
        await expect(browser).toHaveUrl('https://telnyx.com/products/cloud-vpn#form');
        await expect($('//form')).toExist();
    });


});