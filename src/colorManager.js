bits.search.colorManager = function() {
  bits.search.cMsgCenter.sendBackground({message: 'color update'});
};

bits.search.colorManager.uomColor = '#000000';
bits.search.colorManager.nxColor = '#000000';
bits.search.colorManager.cxColor = '#000000';

bits.search.cMsgCenter.sendBackground({message: 'color update'});

/*
 * Returns the highlight color associated with each search provider
 */
bits.search.colorManager.prototype.getColor = function(searchRes) {
  if (searchRes.source === 'uomFile') {
    return bits.search.colorManager.uomColor; 
  } else if (searchRes.source === 'nxFile') {
    return bits.search.colorManager.nxColor;
  } else if (searchRes.source === 'cxSearch'){
    return bits.search.colorManager.cxColor;
  }
};
