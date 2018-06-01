//global variables for SearchProvider
var match;
var isActive = 'true';

//SearchProvider constructor which calls the ISearchProvider constructor
bits.search.uomFile = function() {
  //isActive = 'false';
};

//a new SearchProvider object which inherits from ISearchProvider
bits.search.uomFile.prototype = Object.create(bits.search.ISearchProvider.prototype);

//set the constructor to refer to SearchProvider
bits.search.uomFile.prototype.constructor = bits.search.uomFile;

//replace the functions setup in ISearchProvider
bits.search.uomFile.prototype.query = function(doc) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (isActive === 'true') {
    uom.open('GET', doc, false);

    uom.send(null);
    var data = JSON.parse(uom.responseText);

    for (var i = 0; i < data.length; i++) {
      result[i] = new bits.search.Result();
      result[i].id = data[i].id;
      result[i].name = data[i].name;
      result[i].type = data[i].type;
      result[i].subtype = data[i].subtype;
      result[i].source = 'uomFile';
    }
  }
  return result;
};

// bits.search.uomFile.prototype.init = function(doc) {
//   bits.search.uomFile.prototype.query(doc);
// };

bits.search.uomFile.prototype.setActive = function(active) {
  isActive = active;
};

bits.search.uomFile.prototype.getActive = function() {
  return isActive;
};
