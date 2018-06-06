var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.appMain = function() {
  bits.search.appMain.registerSearchProvider();
  bits.search.appMain.applySearchResults();
};

//This array holds all of the search providers or data sources
bits.search.appMain.searchProviders = [];

//Finds all the search providers
bits.search.appMain.registerSearchProvider = function() {
  var nx = new bits.search.nxFile();
  var cx = new bits.search.cxSearch();
  var uom = new bits.search.uomFile();

  bits.search.appMain.searchProviders[0] = {
    provider: nx,
    active: "false",
    data: null
  };
  bits.search.appMain.searchProviders[1] = {
    provider: cx,
    active: "false",
    data: null
  };
  bits.search.appMain.searchProviders[2] = {
    provider: uom,
    active: "false",
    data: null
  };
};

//bits.search.appMain.initSearchProviders = function() {};

bits.search.appMain.querySearchProviders = function(uomFile, nxFile, body) {
  bits.search.appMain.searchProviders[2].data = bits.search.appMain.searchProviders[2].provider.query(
    uomFile
  );
  bits.search.appMain.searchProviders[1].data = bits.search.appMain.searchProviders[1].provider.query(
    body
  );
  bits.search.appMain.searchProviders[0].data = bits.search.appMain.searchProviders[0].provider.query(
    nxFile
  );
};

bits.search.appMain.setActiveProviders = function(nx, cx, uom) {
  bits.search.appMain.searchProviders[0].provider.setActive(nx);
  bits.search.appMain.searchProviders[0].active = nx;

  bits.search.appMain.searchProviders[1].provider.setActive(cx);
  bits.search.appMain.searchProviders[1].active = cx;

  bits.search.appMain.searchProviders[2].provider.setActive(uom);
  bits.search.appMain.searchProviders[2].active = uom;
};

bits.search.appMain.applySearchResults = function() {
  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.message == "send array") {
      bits.search.appMain.setActiveProviders(msg.nx, msg.cx, msg.uom);

      bits.search.appMain.querySearchProviders(
        "/data/uomData.json",
        "/data/nxData.json",
        msg.pageBody
      );

      // sends data over to the content script
      console.log("recieved sent message from dom");
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            message: "sent data",
            data: bits.search.appMain.searchProviders,
            allActive: msg.allActive,
            match: msg.match
          },
          function(response) {}
        );
      });
    }
  });
};
