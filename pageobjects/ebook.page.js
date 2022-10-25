class EbookPage{
    get firstNameInput () {
        return $('#FirstName')
    }
    
    get lastNameInput () {
        return $('#LastName')
    }

    get companyNameInput () {
        return $('#Company')
    }

    get companyEmailInput () {
        return $('#Email')
    }

    get sendContentButton () {
        return $('button[type="submit"]')
    }

    get linkedinButton () {
        return $('button[aria-label="linkedin"]')
    }

    get facebookButton () {
        return $('button[aria-label="facebook"]')
    }

    get twitterButton () {
        return $('button[aria-label="twitter"]')
    }

    async setFirstName (firstname) {
        await this.firstNameInput.setValue(firstname)
    }

    async setLastName (lastName) {
        await this.lastNameInput.setValue(lastName)
    }

    async setCompanyName (companyName) {
        await this.companyNameInput.setValue(companyName)
    }

    async setCompanyEmail (email) {
        await this.companyEmailInput.setValue(email)
    }

    async clickSendContentButton () {
        await this.sendContentButton.click()
    }

    async clickLinkedinButton () {
        await this.linkedinButton.click()
    }

    async clickFacebookButton () {
        await this.facebookButton.click()
    }

    async clickTwitterButton () {
        await this.twitterButton.click()
    }
    
}

module.exports = new EbookPage();