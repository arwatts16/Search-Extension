bits.search.cMsgCenter = function(){};

/* 
 * Listens for messages sent from bMsgCenter
 */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  bits.search.cMsgCenter.recieve(msg);
});

/* 
 * Checks message contents and executes appropriate logic
 */
bits.search.cMsgCenter.recieve = function(msg) {
  // update message sent by pMsgCenter
  if (msg.message == 'update') {
    //adjust values of msg
    msg.message = 'send array';
    msg.pageBody = document.body.innerText;

    bits.search.cMsgCenter.sendBackground(msg);

  } else if (msg.message == 'sent data') {
    //adjust values of msg
    dataArr = msg.data;
    bits.search.domCtrl.prototype.initMatchManager(msg);
  }
  return msg;
};

/* 
 * Sends messages to bMsgCenter
 */
bits.search.cMsgCenter.sendBackground = function(msg) {
  chrome.runtime.sendMessage(msg, function() {});
};
