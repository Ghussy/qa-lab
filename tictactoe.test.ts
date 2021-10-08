import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can add an X to the top row', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    await delay(1000);
    
});

test('I can add a second X to the top row', async () => {

    let button = await (await driver).findElement(By.id('cell-1'));
    let button1 = await (await driver).findElement(By.id('cell-2'));

    if(button.getText.toString() == 'O') {
        await button.click();
    } else {
        button1.click();
    }

    await delay(1000);
    
});

test('I can add an X to the middle Row', async () => {

    let button = await (await driver).findElement(By.id('cell-4'));
    let button1 = await (await driver).findElement(By.id('cell-5'));

    if(button.getText.toString() == 'O') {
        await button.click();
    } else {
        button1.click();
    }

    await delay(1000);
    
});