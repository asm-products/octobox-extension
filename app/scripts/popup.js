'use strict';

// Listen for message from active tab - drop event triggers the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(sender.tab ?
                'from a content script: ' + sender.tab.url :
                'from the extension');

    // TODO: 1. open popup
    // TODO: 2. response closes the drop area

    return sendResponse('drop handled');
});

// Listen for the event from browser extension icon
document.addEventListener('openPopup', function (e) {
    // TODO: 1. open popup
    console.log(e.detail.data);
}, false);
