bits.search.bMsgCenter = function(){};

/* 
 * Listens for messages sent from cMsgCenter
 */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  msg = bits.search.bMsgCenter.recieveContent(msg);

  bits.search.bMsgCenter.sendContent(msg);
});

/* 
 * Checks message contents and executes appropriate logic
 */
bits.search.bMsgCenter.recieveContent = function(msg) {
  if (msg.message == "send array") {
    bits.search.appMain.setActiveProviders(msg.uom, msg.nx, msg.cx);

    bits.search.appMain.querySearchProviders( "/data/uomData.json", "/data/nxData.json", msg.pageBody);

    // update message values
    msg.message = "sent data";
    msg.data = bits.search.appMain.searchProviders;

  } else if (msg.message == 'color update'){
    msg.uomColor = localStorage.getItem('uomColor');
    msg.nxColor  = localStorage.getItem('nxColor');
    msg.cxColor  = localStorage.getItem('cxColor');
  }

  return msg;
};

/* 
 * Sends messages to cMsgCenter
 */
bits.search.bMsgCenter.sendContent = function(msg) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {});
  });
};
