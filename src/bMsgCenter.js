bits.search.bMsgCenter = function() {};

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
  if (msg.message == 'send array') {
    var activeProviders = [];
    activeProviders.push(msg.nx);
    activeProviders.push(msg.cx);
    activeProviders.push(msg.uom);

    bits.search.appMain.setActiveProviders(activeProviders);
    var dataProviders = [];
    dataProviders.push('/data/nxData.json');
    dataProviders.push(msg.pageBody);
    dataProviders.push('/data/uomData.json');

    bits.search.appMain.querySearchProviders(dataProviders);

    // update message values
    msg.message = 'sent data';
    msg.data = bits.search.appMain.searchProviders;
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
