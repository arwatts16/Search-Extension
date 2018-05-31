// App Main

var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.appMain = function() {
  alert('app');
  this.initSearchProviders();
  this.querySearchProviders();
  this.applySearchResults(searchProviders);
};

//This array holds all of the search providers or data sources
bits.search.appMain.searchProviders = [];

//Finds all the search providers
bits.search.appMain.registerSearchProvider = function(iSearchProvider) {};

bits.search.appMain.initSearchProviders = function() {};

bits.search.appMain.querySearchProviders = function() {};

bits.search.appMain.applySearchResults = function(searchResult) {};
