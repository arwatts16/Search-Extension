bits.search.recieveContent = function(msg) {
  if (msg.message == "send array") {
    bits.search.appMain.setActiveProviders(msg.nx, msg.cx, msg.uom);

    bits.search.appMain.querySearchProviders(
      "/data/uomData.json",
      "/data/nxData.json",
      msg.pageBody
    );

    // update message values
    msg.message = "sent data";
    msg.data = bits.search.appMain.searchProviders;
  }

  return msg;
};

bits.search.sendContent = function(msg) {
  // sends data over to domCtrl
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {});
  });
};
