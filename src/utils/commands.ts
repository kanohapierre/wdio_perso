export const selectDropdown = async (elements: Promise<WebdriverIO.ElementArray>, value: string) => {
    const element = await elements;
    for (let i = 0; i < element.length; i++) {
        const elementGet = await (element[i]).getAttribute("value");
        if (elementGet === value) {
            await (element[i]).click();
            break;
        }
    }
}

export const setText = async (elem: Promise<WebdriverIO.Element>, text: string) => {
    await (await elem).setValue(text);
}

export const selectVisibleText = async (elem: Promise<WebdriverIO.Element>, text: string) => {
    await (await elem).selectByVisibleText(text);
}

export const click = async (elem: Promise<WebdriverIO.Element>) => {
    await (await elem).click();
}