class ResourcesPage{
    get Cookies () {
        return $('div button[aria-label="close and deny"]')
    }

    get EmailSubscribe () {
        return $('#Email')
    }

    get subscribeButton () {
        return $('button[type="submit"]')
    }

    get subscriptionMessage () {
        return $('form[data-e2e="MarketoEmailSignupForm"] + p')
    }
    
    get filterHeaders () {
        return $('//article//header');
    }

    get filterByContent () {
        return $$('//div[@aria-labelledby="filter-by-content"]//li');
    }

    get filterByContentOne () {
        return $('//div[@aria-labelledby="filter-by-content"]//li[1]');
    }
    
    get filterByContentTwo() {
        return $('//div[@aria-labelledby="filter-by-content"]//li[2]');
    }

    get filterByContentThree() {
        return $('//div[@aria-labelledby="filter-by-content"]//li[3]');
    }

    get filterByContentFour() {
        return $('//div[@aria-labelledby="filter-by-content"]//li[4]');
    }

    get blogHeader () {
        return $('h1')
    }

    get GetEbookButton () {
        return $('a[href="/resources/ebook-the-better-twilio-alternative"]')
    }

    get pagination () {
        return $('nav[aria-label="pagination"] li')
    }
    
    get paginationArray () {
        return $$('nav[aria-label="pagination"] li a')
    }

    async scrollToPagination () {
        await this.pagination.scrollIntoView()
    }
    
    async filterItemOne () {
        await this.filterByContentOne.click()
        await expect(await this.filterHeaders).toHaveTextContaining(await this.filterByContentOne.getText())
    }

    async textItemOne () {
        await this.filterByContentOne.getText()
    }

    async filterItemTwo () {
        await this.filterByContentTwo.click();
        await expect(await this.filterHeaders).toHaveTextContaining(await this.filterByContentTwo.getText())
    }

    async textItemTwo () {
        await this.filterByContentTwo.getText()
    }

    async filterItemThree () {
        await this.filterByContentThree.click()
        await expect(await this.filterHeaders).toHaveTextContaining(await this.filterByContentThree.getText())
    }

    async textItemThree () {
        await this.filterByContentThree.getText()
    }

    async filterItemFour () {
        await this.filterByContentFour.click()
        await expect(await this.filterHeaders).toHaveTextContaining(await this.filterByContentFour.getText())
    }

    async textItemFour () {
        await this.filterByContentFour.getText()
    }

    async openResourcesPage () {
        await browser.url('https://telnyx.com/resources')
    }
    
    async EnterEmail (email) {
        await this.EmailSubscribe.scrollIntoView()
        await this.EmailSubscribe.setValue(email);  
    }

    async clickSubscribeButton () {
        await this.subscribeButton.click()
    }

    async clickEbookButton () {
        await this.GetEbookButton.scrollIntoView()
        await this.GetEbookButton.click()
    }
}

module.exports = new ResourcesPage();