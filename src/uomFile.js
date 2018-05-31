//global variables for SearchProvider
var match;
var isActive;

//SearchProvider constructor which calls the ISearchProvider constructor
bits.searchExtension.SearchProvider = function() {
  ISearchProvider.call(this);

  //initialize SearchProvider specific properties
  match = new bits.searchExtension.MatchManager();
  isActive = false;
};

//a new SearchProvider object which inherits from ISearchProvider
bits.searchExtension.SearchProvider.prototype = Object.create(
  bits.searchExtension.ISearchProvider.prototype
);

//set the constructor to refer to SearchProvider
bits.searchExtension.SearchProvider.prototype.constructor =
  bits.searchExtension.SearchProvider;

//replace the functions setup in ISearchProvider
bits.searchExtension.searchProvider.prototype.query = function(document) {
  return; //Array<SearchResult>
};

bits.searchExtension.searchProvider.prototype.init = function() {};

bits.searchExtension.searchProvider.prototype.setActive = function(active) {};

bits.searchExtension.searchProvider.prototype.getActive = function() {
    return; //boolean
};
