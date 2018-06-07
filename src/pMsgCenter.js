bits.search.pMsgCenter = function(){};

/*
 * Sends a message to cMsgCenter everytime values in popup change
 */
bits.search.pMsgCenter.send = function(msg){
    chrome.tabs.query({ 
        active: true, 
        currentWindow: true 
    }, 
    function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {});
        window.close();
      });
}
