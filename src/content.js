chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
    if(msg.message == 'update'){
        alert(msg.message);
    }
});