//global variables for SearchProvider
var match;
var isActive = "true";

//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.cxFile = function() {
  //isActive = 'false';
};

//a new SearchProvider object which inherits from ISearchProvider
bits.search.cxFile.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

//set the constructor to refer to SearchProvider
bits.search.cxFile.prototype.constructor = bits.search.cxFile;

//replace the functions setup in ISearchProvider
bits.search.cxFile.prototype.query = function(doc) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (isActive === "true") {
    uom.open("GET", doc, false);

    uom.send(null);
    var data = JSON.parse(uom.responseText);

    for (var i = 0; i < data.length; i++) {
      result[i] = new bits.search.Result();
      result[i].id = data[i].id;
      result[i].name = data[i].name;
      result[i].type = data[i].type;
      result[i].subtype = data[i].subtype;
      result[i].source = "uomFile";
    }
  }
  return result;
};

// bits.search.cxFile.prototype.init = function(doc) {
//   bits.search.cxFile.prototype.query(doc);
// };

bits.search.cxFile.prototype.setActive = function(active) {
  isActive = active;
};

bits.search.cxFile.prototype.getActive = function() {
  return isActive;
};
