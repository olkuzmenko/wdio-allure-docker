class PricingElasticSipPage{
    get firstNameInput () {
        return $('input[name="FirstName"]')
    }

    get lastNameInput () {
        return $('input[name="LastName"]')
    }

    get emailInput () {
        return $('input[name="Email"]')
    }
    
    get downloadButton () {
        return $('button[type="submit"]')
    }

    get successMessage () {
        return $('.iEYkvv')
    }

    get errorMessage () {
        return $('div[aria-live="assertive"]')
    }

    async clickDownloadButton () {
        await $('#pricing_download_form').scrollIntoView()
        await browser.pause(3000)
        await this.downloadButton.click()
    }

    async openPricingElasticsPage() {
        await browser.url('https://telnyx.com/pricing/elastic-sip')
    }

    async setFirstName (name) {
        await $('#pricing_download_form').scrollIntoView()
        await this.firstNameInput.setValue(name)
    }

    async setLastName (name) {
        await this.lastNameInput.setValue(name)
    }

    async setEmail (email) {
        await this.emailInput.setValue(email)
    }
}

module.exports = new PricingElasticSipPage();