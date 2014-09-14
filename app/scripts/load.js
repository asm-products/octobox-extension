'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page');

var openPopup = function() { // attr: tab
    // open popup wheb clicking on an extension icon
    var openPopupEvent = new CustomEvent('openPopup', { 'detail': {
        'data': 'yes, please'
    }});
    document.dispatchEvent(openPopupEvent);

};

// execute script after clicking the icon
chrome.browserAction.onClicked.addListener(openPopup);
