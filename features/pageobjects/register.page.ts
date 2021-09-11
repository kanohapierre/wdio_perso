import Page from "./page";

class RegisterPage extends Page {
    private get header() { return $("//h1"); }
    private get fname() { return $("[name=firstname]"); }
    private get lname() { return $("[name=lastname]"); }

    private get gender_radio() { return $$("[name=sex]"); }
    private get experience_radio() { return $$("[name=exp]"); }
    private get favchai_checkbox() { return $$("[name*=Tea]"); }
    private get reason_checkbox() { return $$("[name=tool]"); }

    private get continent_dropdown() { return $("#continents"); }
    private get selCommands_multiselect() { return $("#selenium_commands"); }
    private get submit_btn() { return $("#submit"); }

    getHeader() {
        return this.header;
    }

    async selectDropdown(element: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < element.length; i++) {
            const elementGet = await (element[i]).getAttribute("value");
            if (elementGet === value) {
                await (element[i]).click();
                break;
            }
        }

    }

    async enterFirstName(firstname: string) {
        await (await this.fname).setValue(firstname)
    }

    async enterLastName(lastname: string) {
        await (await this.lname).setValue(lastname)
    }

    async selectGender(gender: string) {
        this.selectDropdown(await this.gender_radio, gender);
    }

    async selectExperience(years: string) {
        this.selectDropdown(await this.experience_radio, years);
    }

    async selectFavourite(chaitype: string) {
        this.selectDropdown(await this.favchai_checkbox, chaitype);
    }

    async selectReason(reason: string) {
        this.selectDropdown(await this.reason_checkbox, reason);
    }

    async selectContinent(continent: string) {
        await (await this.continent_dropdown).selectByVisibleText(continent);
    }

    async selectSeleniumCommand(command: string) {
        await (await this.selCommands_multiselect).selectByVisibleText(command);
    }

    async clickOnSubmitBtn() {
        await (await this.submit_btn).click();
    }

}

export default new RegisterPage();