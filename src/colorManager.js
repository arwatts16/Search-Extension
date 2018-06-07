bits.search.colorManager = function() {};

/*
 * Returns the highlight color associated with each search provider
 */
bits.search.colorManager.prototype.getColor = function(searchRes) {
  if (searchRes.source === 'uomFile') {
    return 'yellow'; 
  } else if (searchRes.source === 'nxFile') {
    return '#66ffff'; //light blue
  } else if (searchRes.source === 'cxSearch'){
    return '#ffb733'  //orange
  }
};
