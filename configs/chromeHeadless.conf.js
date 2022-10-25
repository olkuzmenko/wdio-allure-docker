const {config} = require("./chrome.conf");
const chromeHeadlessConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost']
        },
    }],
    logLevel: 'warn',
    
};
exports.config = chromeHeadlessConfig;