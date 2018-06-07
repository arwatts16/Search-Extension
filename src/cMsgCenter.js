bits.search.recieve = function(msg) {
  if (msg.message == "update") {
    //adjust values of msg
    msg.message = "send array";
    msg.pageBody = document.body.innerText;

    bits.search.sendBackground(msg);
  } else if (msg.message == "sent data") {
    //adjust values of msg
    dataArr = msg.data;
    bits.search.domCtrl.prototype.initMatchManager(msg);
  }
  return msg;
};

bits.search.sendBackground = function(msg) {
  // send message to appMain requesting data
  chrome.runtime.sendMessage(msg, function() {});
};
