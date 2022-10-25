const { config } = require("./chrome.conf");

const edgeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', {chromiumedge: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
            args: ['--headless', '--window-size=1920,1080'],
        }
    }],
};

exports.config = edgeHeadlessConfig;