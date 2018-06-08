/* 
 * Initializes local storage
 */
localStorage.setItem("active", false);
localStorage.setItem("uomActive", false);
localStorage.setItem("nxActive", false);
localStorage.setItem("cxActive", false);
localStorage.setItem("match", false);

//default colors for highlight methods
localStorage.setItem("uomColor", '#ffff00');
localStorage.setItem("nxColor",  '#66ffff');
localStorage.setItem("cxColor",  '#ffb733');

/* 
 * Calls the appMain constructor
 */
var app = new bits.search.appMain();
