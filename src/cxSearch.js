//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.cxSearch = function() {};

//global variable(s) for SearchProvider
bits.search.cxSearch.IsActive;

//a new SearchProvider object which inherits from ISearchProvider
bits.search.cxSearch.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

//set the constructor to refer to SearchProvider
bits.search.cxSearch.prototype.constructor = bits.search.cxSearch;

//replace the functions setup in ISearchProvider
bits.search.cxSearch.prototype.query = function(currBody) {
  doc = nlp(currBody);
  var result = [];
  var i = 0;

  if (bits.search.cxSearch.IsActive === "true") {
    var people = doc.people().data();
    var places = doc.places().data();
    var orgs = doc.organizations().data();

    for (; i < people.length; i++) {
      result[i] = new bits.search.Result();
      result[i].name = people[i].text;
      result[i].id = i;
      result[i].type = "person";
      result[i].source = "cxSearch";
    }
    for (var j = 0; j < places.length; i++ && j++) {
      result[i] = new bits.search.Result();
      result[i].name = places[j].text;
      result[i].id = i;
      result[i].type = "place";
      result[i].source = "cxSearch";
    }
    for (var j = 0; j < orgs.length; i++ && j++) {
      result[i] = new bits.search.Result();
      result[i].name = orgs[j].text;
      result[i].id = i;
      result[i].type = "organization";
      result[i].source = "cxSearch";
    }
    return result;
  }
};

bits.search.cxSearch.prototype.setActive = function(active) {
  bits.search.cxSearch.IsActive = active;
};

bits.search.cxSearch.prototype.getActive = function() {
  return bits.search.cxSearch.IsActive;
};
