bits.search.uomFile = function() {};

/*
 * Holds the value for whether or not cxSearch is active
 */
bits.search.uomFile.IsActive = "false";

/*
 * A new SearchProvider object which inherits from ISearchProvider
 */ 
bits.search.uomFile.prototype = Object.create(
  bits.search.ISearchProvider.prototype
);

/*
 * Set the constructor to refer to SearchProvider
 */ 
bits.search.uomFile.prototype.constructor = bits.search.uomFile;

/*
 * Reads from uom data file
 */
bits.search.uomFile.prototype.query = function(doc) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (bits.search.uomFile.IsActive === "true") {
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

/*
 * Get and set the value of isActive
 */

bits.search.uomFile.prototype.setActive = function(active) {
  bits.search.uomFile.IsActive = active;
};

bits.search.uomFile.prototype.getActive = function() {
  return bits.search.uomFile.IsActive;
};
