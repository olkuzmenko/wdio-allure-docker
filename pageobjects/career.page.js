class CareerPage{
    get firstPosition () {
        return $('section h4 ~ a:nth-of-type(1)')
    }
    
    async clickFirstPosition () {
        await this.firstPosition.scrollIntoView();
        await this.firstPosition.click()
    }
}

module.exports = new CareerPage();