// App Main

var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.searchExtensionApp = function() {
  alert('app');
  this.initSearchProviders();
  this.querySearchProviders();
  this.applySearchResults(searchProviders);
};

//This array holds all of the search providers or data sources
bits.search.searchExtensionApp.searchProviders = [];

//Finds all the search providers
bits.search.searchExtensionApp.registerSearchProvider = function(iSearchProvider) {};

bits.search.searchExtensionApp.initSearchProviders = function() {};

bits.search.searchExtensionApp.querySearchProviders = function() {};

bits.search.searchExtensionApp.applySearchResults = function(searchResult) {};
