// capture chrome onInstalled event.
// "install" tested on Edge/Chrome/Firefox/Safari at time of development

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.runtime.openOptionsPage();
    } else if (details.reason === "update") {
        chrome.runtime.openOptionsPage();
    } else if (details.reason === "chrome_update") {
    } else if (details.reason === "shared_module_update") {
    }
});
