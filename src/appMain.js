// App Main

var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.appMain = function() {
  alert("app");
  bits.search.appMain.registerSearchProvider();
};

//This array holds all of the search providers or data sources
searchProviders = [];

//Finds all the search providers
bits.search.appMain.registerSearchProvider = function(iSearchProvider) {
  var uomProvider = new bits.search.uomFile();
  var result = uomProvider.query("/data/uomData.json");
};

bits.search.appMain.initSearchProviders = function() {};

bits.search.appMain.querySearchProviders = function() {};

bits.search.appMain.applySearchResults = function(searchResult) {};
