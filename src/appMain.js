goog.provide('SearchExtensionMain');

goog.require('goog.array');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
goog.require('goog.functions');
goog.require('goog.object');
var bits = function () { };
bits.search = function () { };

/*
 * Constructor
 */
bits.search.appMain = function () {
  bits.search.appMain.registerSearchProvider('nxFile', 'file');
  bits.search.appMain.registerSearchProvider('cxSearch', 'search');
  bits.search.appMain.registerSearchProvider('uomFile', 'file');
};

/*
 * Holds all of the search providers or data sources
 */
bits.search.appMain.searchProviders = [];

/* 
 * Finds all the search providers
 * Called by the constructor 
 * Whichever provider is added the the array last will take precedence
 */
bits.search.appMain.registerSearchProvider = function (name, type) {
  var sProvider = new bits.search.sProvider();
  if (type === 'file') {
    sProvider.provider = new bits.search.File(name);
  } else if (type === 'search') {
    sProvider.provider = new bits.search.cxSearch();
  }
  bits.search.appMain.searchProviders.push(sProvider);
};

/* 
 * Called by "send array" message from bMsgCenter.js
 * Sets data in searchProviders array
 */
bits.search.appMain.querySearchProviders = function (dataSources) {
  for (var i = 0; i < this.searchProviders.length; i++) {
    this.searchProviders[i].data = bits.search.appMain.searchProviders[i].provider.query(
      dataSources[i],
      this.searchProviders[i].active
    );
  }
};

/* 
 * Called by "send array" message from bMsgCenter.js
 * Sets isActive for each provider and sets active inside searchProviders array
 */
bits.search.appMain.setActiveProviders = function (activeSources) {
  for (var i = 0; i < this.searchProviders.length; i++) {
    this.searchProviders[i].provider.setActive(activeSources[i]);
    this.searchProviders[i].active = activeSources[i];
  }
};
