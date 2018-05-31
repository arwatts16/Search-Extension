// App Main

var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.searchExtensionApp = (function() {
  alert('app');
  bits.search.searchExtensionApp.registerSearchProvider();
});

//This array holds all of the search providers or data sources
searchProviders = [];

//Finds all the search providers
bits.search.searchExtensionApp.registerSearchProvider = function(iSearchProvider) {
  var uomProvider = new bits.search.uomFile;
  var result = uomProvider.query("/data/uomData.json");
};

bits.search.searchExtensionApp.initSearchProviders = function() {};

bits.search.searchExtensionApp.querySearchProviders = function() {};

bits.search.searchExtensionApp.applySearchResults = function(searchResult) {}; 
