class ProductsPage{
    get cloudVpnButton () {
        return $('main a[href="/products/cloud-vpn"]')
    }

    get askUsAboutYourUseCaseButton () {
        return $('a[href="#form"]')
    }

    async ClickAskUsAboutYourUseCaseButton () {
        await this.askUsAboutYourUseCaseButton.scrollIntoView();
        await this.askUsAboutYourUseCaseButton.click()
    }
    
    async clickCloudVpnButton () {
        await this.cloudVpnButton.scrollIntoView()
        await this.cloudVpnButton.click()
    }

}

module.exports = new ProductsPage();