const { config } = require("./chrome.conf");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "firefox",
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: ['--window-size=1920,1080'],
        }
    }],
};

exports.config = firefoxConfig;