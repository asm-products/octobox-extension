'use strict';

window.onload = function () {
    console.log('Listening to drops!');

    // TODO: listen to drop event on our dropper
    document.addEventListener('click', function(){ // e
        //send file data to extension and handle it there
        var dropData = {
            'openPopup': true,
            'data': 'yes, please'
        };
        chrome.runtime.sendMessage(dropData, function(response) {
            console.log(response);
        });
    }, false);
};
