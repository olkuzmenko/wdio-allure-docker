class MainPage{
    get voiceApiblock () {
        return $('main a[href="/products/voice-api"]')
    }

    get elasticSIPblock () {
        return $('main a[href="/products/sip-trunks"]')
    }

    get messagingApiBlock () {
        return $('main a[href="/products/sms-api"]')
    }

    get  exploreInternationalNumbersBlock () {
        return $('main a[href="/use-cases/international-numbers"]')
    }

    get videoApiBlock () {
        return $('main a[href="/products/video-api"]')
    }

    get WirelessBlock () {
        return $('main a[href="/products/iot-sim-card"]')
    }
    get exploreOurProductsButton () {
        return $('main a[href="/products"]')
    }
    get allProducts () {
        return $('') 
    }
    get aboutUslink () {
        return $('footer a[href="/company/about"]')
    }

    get Cookies () {
        return $('div button[aria-label="close and deny"]')
    }

    get careerLink () {
        return $('footer a[href="/company/careers"]')
    }

    async clickExploreProductsButton () {
        await this.exploreOurProductsButton.scrollIntoView()
        await this.exploreOurProductsButton.click()
    }
    
    async clickCareerPage () {
        await this.careerLink.scrollIntoView()
        await this.careerLink.click()
    }
    
    async openMainPage () {
        await browser.url('https://telnyx.com/')
    }

    async clickAboutUs () {
        await this.aboutUslink.scrollIntoView()
        await this.aboutUslink.click()
    }
}

module.exports = new MainPage();