//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.nxFile = function() {};

//global variable(s) for SearchProvider
bits.search.nxFile.IsActive = "false";

//a new SearchProvider object which inherits from ISearchProvider
bits.search.nxFile.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

//set the constructor to refer to SearchProvider
bits.search.nxFile.prototype.constructor = bits.search.nxFile;

//replace the functions setup in ISearchProvider
bits.search.nxFile.prototype.query = function(doc) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (bits.search.nxFile.IsActive === "true") {
    uom.open("GET", doc, false);

    uom.send(null);
    var data = JSON.parse(uom.responseText);

    for (var i = 0; i < data.length; i++) {
      result[i] = new bits.search.Result();
      result[i].id = data[i].id;
      result[i].name = data[i].name;
      result[i].type = data[i].type;
      result[i].subtype = data[i].subtype;
      result[i].source = "nxFile";
    }
  }
  return result;
};

// bits.search.nxFile.prototype.init = function(doc) {
//   bits.search.nxFile.prototype.query(doc);
// };

bits.search.nxFile.prototype.setActive = function(active) {
  bits.search.nxFile.IsActive = active;
};

bits.search.nxFile.prototype.getActive = function() {
  return bits.search.nxFile.IsActive;
};
