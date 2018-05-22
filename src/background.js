alert("background running");

chrome.browserAction.onClicked.addListener(buttonClicked); // will NOT happen if there is a popup associated with the button

function buttonClicked(tab) {
    alert("button clicked!!");  

    let msg = {
        txt: "is it working?"
    }

    /* 
       Sends a message to the content script in the specified tab 
       (integer tabId, any message, object options, function responseCallback)
       Content script will then run the chrome.runtime.onMessage event
    */
    chrome.tabs.sendMessage(tab.id, msg);
}