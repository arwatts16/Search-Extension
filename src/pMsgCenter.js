bits.search.pMsgCenter = function(){};

// alert the content script that a change has been made
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
