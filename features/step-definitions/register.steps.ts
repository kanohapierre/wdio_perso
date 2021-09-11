import { Given, When, Then } from "@cucumber/cucumber";
import registerPage from "../pageobjects/register.page"

Given(/^I am on the page \"([^\"]*)\"$/,async function (appurl) {
    await browser.url(appurl);
    await browser.maximizeWindow();
});

Then(/^I validate the page header \"([^\"]*)\"$/,async function (headertext) {
    expect(registerPage.header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and lastname (.+)$/,async function (fname, lname) {
    await (registerPage.fname).setValue(fname);
    await (registerPage.lname).setValue(lname);

});

Then(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/,async function (gender: string, yrs: string, favchai: string, reason: string) {
    const gender_radio = await $$("[name=sex]");
    const experience_radio = await $$("[name=exp]");
    const favchai_checkbox = await $$("[name*=Tea]");
    const reason_checkbox = await $$("[name=tool]");

    registerPage.selectDropdown(await registerPage.gender_radio, gender);
    registerPage.selectDropdown(await registerPage.experience_radio, yrs);
    registerPage.selectDropdown(await registerPage.favchai_checkbox, favchai);
    registerPage.selectDropdown(await registerPage.reason_checkbox, reason);

});

When(/^I select continent (.+) and commands (.+)$/,async function (continent, command) {
    await (await registerPage.continent_dropdown).selectByVisibleText(continent);
    await (await registerPage.selCommands_multiselect).selectByVisibleText(command);
});

When(/^I click on submit button$/,async function () {
    await (await registerPage.submit_btn).click();
});