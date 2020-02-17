const { Builder, Capabilities } = require("selenium-webdriver");
var capabilities = Capabilities.chrome();
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://10.33.132.237:4444/wd/hub")
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('http://10.33.132.120');
    }
    catch (ev) {
        console.log(ev)
    }
    finally {
        console.log('terminado');
        await driver.quit();
    }

})();  