import {Given, Then} from '@cucumber/cucumber'

Given(/^I open the browser and load the url (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
  });

Then(/^I should see a header message with text (.+)$/, async function (homepageheader) {
    const header = await $('.heading').getText();
    expect(header).toEqual(homepageheader)
  });