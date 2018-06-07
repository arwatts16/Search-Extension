var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.appMain = function() {
  bits.search.appMain.registerSearchProvider();
};

//Holds all of the search providers or data sources
bits.search.appMain.searchProviders = [];

/* 
 * Finds all the search providers
 * Called by the constructor 
 * Whichever provider is added the the array last will take precedence
 */
bits.search.appMain.registerSearchProvider = function() {
  bits.search.appMain.searchProviders[0] = new bits.search.sProvider();
  bits.search.appMain.searchProviders[0].provider = new bits.search.nxFile();

  bits.search.appMain.searchProviders[1] = new bits.search.sProvider();
  bits.search.appMain.searchProviders[1].provider = new bits.search.cxSearch();

  bits.search.appMain.searchProviders[2] = new bits.search.sProvider();
  bits.search.appMain.searchProviders[2].provider = new bits.search.uomFile();
};

/* 
 * Called by "send array" message from bMsgCenter.js
 * Sets data in searchProviders array
 */
bits.search.appMain.querySearchProviders = function(uomFile, nxFile, body) {
  bits.search.appMain.searchProviders[0].data = bits.search.appMain.searchProviders[0].provider.query(nxFile);
  bits.search.appMain.searchProviders[1].data = bits.search.appMain.searchProviders[1].provider.query(body);
  bits.search.appMain.searchProviders[2].data = bits.search.appMain.searchProviders[2].provider.query(uomFile);
};

/* 
 * Called by "send array" message from bMsgCenter.js
 * Sets isActive for each provider and sets active inside searchProviders array
 */
bits.search.appMain.setActiveProviders = function(uom, nx, cx) {
  bits.search.appMain.searchProviders[0].provider.setActive(nx);
  bits.search.appMain.searchProviders[0].active = nx;

  bits.search.appMain.searchProviders[1].provider.setActive(cx);
  bits.search.appMain.searchProviders[1].active = cx;

  bits.search.appMain.searchProviders[2].provider.setActive(uom);
  bits.search.appMain.searchProviders[2].active = uom;
};
