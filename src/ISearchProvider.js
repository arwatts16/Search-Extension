bits.searchExtension.ISearchProvider = function() {};

//returns an array of SearchResult objects
bits.searchExtension.ISearchProvider.prototype.query = function(document) {};

bits.searchExtension.ISearchProvider.prototype.init = function() {};

bits.searchExtension.ISearchProvider.prototype.setActive = function(active) {};

//returns a boolean
bits.searchExtension.ISearchProvider.prototype.getActive = function() {};
