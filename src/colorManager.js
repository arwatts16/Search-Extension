//Returns the color that a certain data is

//Constructor
bits.search.colorManager = function() {};

bits.search.colorManager.prototype.getColor = function(searchRes) {
  if (searchRes.source === 'uomFile') {
    return 'yellow';
  } else if (searchRes.source === 'nxFile') {
    return '#66ffff';
  }
};
