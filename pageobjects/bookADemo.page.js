class BookADemoPage{
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

    get jobTitleInput () {
        return $('#Title')
    }

    get countryPopUp () {
        return $('#Phone_Number_Extension__c')
    }

    get phoneNumber () {
        return $('#Phone_Number_Base__c')
    }

    get useCasePopUp () {
        return $('#Use_Case_Form__c')
    }

    get applyButton () {
        return $('button[type="submit"]')
    }

    get errorMessage () {
        return $('.mktoError')
    }

    async clickApplyButton(){
        await this.applyButton.click()
    }

    async openBookADemoPage () {
        await browser.url('https://telnyx.com/book-a-demo')
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

    async setJobTitle(title) {
        await this.jobTitleInput.setValue(title)
    }
    
    async setCompanyEmail (email) {
        await this.companyEmailInput.setValue(email)
    }

    async setPhoneNumber (number){
        await this.phoneNumber.setValue(number)
    }

    async selectCountry () {
        await this.countryPopUp.click();
        await $('option[value="+1"]').click()
    }

    async chooseUseCase(){
        await this.useCasePopUp.click();
        await $('option[value="Build Custom Call Flows"]').click()
    }
}

module.exports = new BookADemoPage();