const { config } = require("./chrome.conf");
const firefoxHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "firefox",
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: ['--headless', '--window-size=1920,1080'],
        }
    }],
};

exports.config = firefoxHeadlessConfig;