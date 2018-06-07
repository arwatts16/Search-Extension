bits.search.nxFile = function() {};

/*
 * Holds the value for whether or not cxSearch is active
 */
bits.search.nxFile.IsActive = "false";


/*
 * A new SearchProvider object which inherits from ISearchProvider
 */
bits.search.nxFile.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

/*
 * Set the constructor to refer to SearchProvider
 */
bits.search.nxFile.prototype.constructor = bits.search.nxFile;

/*
 * Reads from nx data file
 */
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


/*
 * Get and set the value of isActive
 */
bits.search.nxFile.prototype.setActive = function(active) {
  bits.search.nxFile.IsActive = active;
};

bits.search.nxFile.prototype.getActive = function() {
  return bits.search.nxFile.IsActive;
};
