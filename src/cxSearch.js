//global variable(s) for SearchProvider
var cxIsActive;
var body = "";

//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.cxSearch = function() {
  cxIsActive = "false";
};

//a new SearchProvider object which inherits from ISearchProvider
bits.search.cxSearch.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

//set the constructor to refer to SearchProvider
bits.search.cxSearch.prototype.constructor = bits.search.cxSearch;

//replace the functions setup in ISearchProvider
bits.search.cxSearch.prototype.query = function() {
  doc = nlp(body);
  var result = [];
  var i = 0;

  if (cxIsActive === "true") {
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
  cxIsActive = active;
};

bits.search.cxSearch.prototype.getActive = function() {
  return cxIsActive;
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == "DOM loaded") {
    body = msg.page;
  }
});
