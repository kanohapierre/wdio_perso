import Page from "./page";

class RegisterPage extends Page {
    get header() { return $("//h1"); }
    get fname() { return $("[name=firstname]"); }
    get lname() { return $("[name=lastname]"); }

    get gender_radio() { return $$("[name=sex]"); }
    get experience_radio() { return $$("[name=exp]"); }
    get favchai_checkbox() { return $$("[name*=Tea]"); }
    get reason_checkbox() { return $$("[name=tool]"); }

    get continent_dropdown() { return $("#continents"); }
    get selCommands_multiselect() { return $("#selenium_commands"); }
    get submit_btn() { return $("#submit"); }

    async selectDropdown(element: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < element.length; i++) {
            const elementGet = await (element[i]).getAttribute("value");
            if (elementGet === value) {
                await (element[i]).click();
                break;
            }
    }
    
    }
}

export default new RegisterPage();