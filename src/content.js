var active = false;
var input1 = '';
var input2 = '';

chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
    if(msg.message == 'update'){
        active = msg.message; // will all be saved as strings
        input1 = msg.input1;
        input2 = msg.input2;
    }

});