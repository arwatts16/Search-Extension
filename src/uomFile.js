//global variables for SearchProvider
var match;
var isActive;

//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.SearchProvider = function() {
  ISearchProvider.call(this);

  //initialize SearchProvider specific properties
  match = new bits.search.MatchManager();
  isActive = false;
};

//a new SearchProvider object which inherits from ISearchProvider
bits.search.SearchProvider.prototype = Object.create(bits.search.ISearchProvider.prototype);

//set the constructor to refer to SearchProvider
bits.search.SearchProvider.prototype.constructor = bits.search.SearchProvider;

//replace the functions setup in ISearchProvider
bits.search.searchProvider.prototype.query = function(document) {
  return; //Array<SearchResult>
};

bits.search.searchProvider.prototype.init = function() {};

bits.search.searchProvider.prototype.setActive = function(active) {};

bits.search.searchProvider.prototype.getActive = function() {
  return; //boolean
};
