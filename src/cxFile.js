//global variables for SearchProvider
var match;
var cxIsActive;

//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.cxFile = function() {
  cxIsActive = 'false';
};

//a new SearchProvider object which inherits from ISearchProvider
bits.search.cxFile.prototype = Object.create(bits.search.ISearchProvider.prototype);

//set the constructor to refer to SearchProvider
bits.search.cxFile.prototype.constructor = bits.search.cxFile;

//replace the functions setup in ISearchProvider
bits.search.cxFile.prototype.query = function(doc) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (cxIsActive === 'true') {
    uom.open('GET', doc, false);

    uom.send(null);
    var data = JSON.parse(uom.responseText);

    for (var i = 0; i < data.length; i++) {
      result[i] = new bits.search.Result();
      result[i].id = data[i].id;
      result[i].name = data[i].name;
      result[i].type = data[i].type;
      result[i].subtype = data[i].subtype;
      result[i].source = 'cxFile';
    }
  }
  return result;
};

// bits.search.cxFile.prototype.init = function(doc) {
//   bits.search.cxFile.prototype.query(doc);
// };

bits.search.cxFile.prototype.setActive = function(active) {
  cxIsActive = active;
};

bits.search.cxFile.prototype.getActive = function() {
  return cxIsActive;
};
