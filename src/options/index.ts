/*
 * This file includes all scripts running while the extension
 * is active. It is currently only loaded on popup.html
 */


// Listen for clicks to the extension icon
(function () {
    const toggleButton = document.getElementById('toggle-page');

    toggleButton.addEventListener('click', function () {
        // When the icon is clicked, create a new tab pointing to the index page
        chrome.tabs.create({
            url: chrome.extension.getURL('/index.html')
        });
    });
})();