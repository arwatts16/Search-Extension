// App Main

var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.appMain = function() {
  alert('app');
  bits.search.appMain.registerSearchProvider();
  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.message == 'send array') {
      console.log('recieved sent message from dom');
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'sent data', data: searchProviders[0] }, function(response) {});
      });
    }
  });
};

//This array holds all of the search providers or data sources
searchProviders = [];

//Finds all the search providers
bits.search.appMain.registerSearchProvider = function(iSearchProvider) {
  var uomProvider = new bits.search.uomFile();
  var result = uomProvider.query('/data/uomData.json');
  searchProviders[0] = result;
};

bits.search.appMain.initSearchProviders = function() {};

bits.search.appMain.querySearchProviders = function() {};

bits.search.appMain.applySearchResults = function(searchResult) {
  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.message == 'send array') {
      console.log('recieved sent message from dom');
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'sent data', data: sendResult }, function(response) {});
      });
    }
  });
};
