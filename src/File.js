bits.search.File = function(source) {
  this.source = source;
};

/*
 * Holds the value for whether or not cxSearch is active
 */
bits.search.File.IsActive = 'false';

/*
 * Holds the value for whether or not cxSearch is active
 */
bits.search.File.source = '';

/*
 * A new SearchProvider object which inherits from ISearchProvider
 */

bits.search.File.prototype = Object.create(bits.search.ISearchProvider.prototype);

/*
 * Set the constructor to refer to SearchProvider
 */

bits.search.File.prototype.constructor = bits.search.uomFile;

/*
 * Reads from uom data file
 */
bits.search.File.prototype.query = function(doc, active) {
  var result = [];
  var uom = new XMLHttpRequest();
  if (active === 'true') {
    uom.open('GET', doc, false);

    uom.send(null);
    var data = JSON.parse(uom.responseText);

    for (var i = 0; i < data.length; i++) {
      result[i] = new bits.search.Result();
      result[i].id = data[i].id;
      result[i].name = data[i].name;
      result[i].type = data[i].type;
      result[i].subtype = data[i].subtype;
      result[i].source = this.source;
    }
  }
  return result;
};

/*
 * Get and set the value of isActive
 */

bits.search.File.prototype.setActive = function(active) {
  bits.search.File.IsActive = active;
};

bits.search.File.prototype.getActive = function() {
  return bits.search.File.IsActive;
};
