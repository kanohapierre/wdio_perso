import { Given, When, Then } from "@cucumber/cucumber";
import registerPage from "../pageobjects/register.page"

Given(/^I am on the page \"([^\"]*)\"$/, async function (appurl) {
    await browser.url(appurl);
    await browser.maximizeWindow();
});

Then(/^I validate the page header \"([^\"]*)\"$/, async function (headertext) {
    expect(registerPage.getHeader()).toHaveText(headertext);
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname, lname) {
    await registerPage.enterFirstName(fname)
    await registerPage.enterLastName(lname)

});

Then(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {
    await registerPage.selectGender(gender);
    await registerPage.selectExperience(yrs);
    await registerPage.selectFavourite(favchai);
    await registerPage.selectReason(reason);

});

When(/^I select continent (.+) and commands (.+)$/, async function (continent, command) {
    await registerPage.selectContinent(continent);
    await registerPage.selectSeleniumCommand(command);
});

When(/^I click on submit button$/, async function () {
    await registerPage.clickOnSubmitBtn();
});