import { Given, When, Then } from "@cucumber/cucumber";

Given(/^I am on the page \"([^\"]*)\"$/,async function (appurl) {
    await browser.url(appurl);
    await browser.maximizeWindow();
});

Then(/^I validate the page header \"([^\"]*)\"$/,async function (headertext) {
    const header = await $("//h1");
    expect(header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and lastname (.+)$/,async function (fname, lname) {
    const fname_input = await $("[name=firstname]");
    const lname_input = await $("[name=lastname]");

    await (fname_input).setValue(fname);
    await (lname_input).setValue(lname);

});

Then(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/,async function (gender: string, yrs: string, favchai: string, reason: string) {
    const gender_radio = await $$("[name=sex]");
    const experience_radio = await $$("[name=exp]");
    const favchai_checkbox = await $$("[name*=Tea]");
    const reason_checkbox = await $$("[name=tool]");

    for (let i = 0; i < gender_radio.length; i++) {
        const element = await (gender_radio[i]).getAttribute("value");
        if (element === gender) {
            await (gender_radio[i]).click();
            break;
        }
}

for (let i = 0; i < experience_radio.length; i++) {
    const element = await (experience_radio[i]).getAttribute("value");
    if (element === yrs) {
        await (experience_radio[i]).click();
        break;
    }
}

for (let i = 0; i < favchai_checkbox.length; i++) {
    const element = await (favchai_checkbox[i]).getAttribute("value");
    if (element === favchai) {
        await (favchai_checkbox[i]).click();
        break;
    }
}

for (let i = 0; i < reason_checkbox.length; i++) {
    const element = await (reason_checkbox[i]).getAttribute("value");
    if (element === reason) {
        await (reason_checkbox[i]).click();
        break;
    }
}

});

Then(/^I select continent (.+) and commands (.+)$/,async function (continent, command) {
    const continent_dropdown = await $("#continents");
    const selCommands_multiselect = await $("#selenium_commands");

    await continent_dropdown.selectByVisibleText(continent);
    await selCommands_multiselect.selectByVisibleText(command);
    await browser.pause(5000);
});

When(/^I click on submit button$/,async function () {
    const submit_btn = await $("#submit");
    await submit_btn.click();
});