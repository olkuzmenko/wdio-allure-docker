const MainPage = require('../pageobjects/main.page');
const BookADemoPage = require('../pageobjects/bookADemo.page');
const Randomize = require('../helper/randomize')

describe('Book a demo page features', () => {
    before('close cookies', async () => {
        if(MainPage.Cookies.isExisting()){
            MainPage.Cookies.click()
        }
    })
    it('Should send empty form', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.clickApplyButton();
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('This field is required.')
    })

    it('Should send form empty Primary Product interest', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(10))
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('This field is required.')
    })

    it('Should send form empty country', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(10));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('Phone number must have an extension')
    })

    it('Should send form  phone with non-number characters', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(' ' + Randomize.randomeNumber(8));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveTextContaining('Phone number should be a string of numbers')
    })

    it('Should send form invalid phone with one digit', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(1));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('Phone numbers must be minimum 6 digits.')
    })

    it('Should send form invalid phone with 16 digit', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(16));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('Phone numbers can have a maximum of 15 digits.')
    })

    it('Should send form phone with 15 digit', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(15));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(browser).toHaveUrlContaining('https://telnyx.com/thank-you')
    })

    it('Should send form with invalid email', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeString());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(10));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveTextContaining('Must be valid email')
    })

    it('Should send form with invalid number 5 digits', async () => {
        BookADemoPage.openBookADemoPage();
        await BookADemoPage.setFirstName(Randomize.randomeString());
        await BookADemoPage.setLastName(Randomize.randomeString());
        await BookADemoPage.setCompanyName(Randomize.randomeString());
        await BookADemoPage.setJobTitle(Randomize.randomeString());
        await BookADemoPage.setCompanyEmail(Randomize.randomeEmail());
        await BookADemoPage.selectCountry();
        await BookADemoPage.setPhoneNumber(Randomize.randomeNumber(5));
        await BookADemoPage.chooseUseCase()
        await BookADemoPage.clickApplyButton()
        await expect(BookADemoPage.errorMessage).toBeDisplayed();
        await expect(BookADemoPage.errorMessage).toHaveText('Phone numbers must be minimum 6 digits.')
    })
})