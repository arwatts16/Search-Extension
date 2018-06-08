/*
 * To add a new searchProvider:
 *     - new file:      Create a file that will hold isActive, a query function for the data
 *                      as well as a getter and setter for the isActive class
 *     - appMain:       Create a space for it in register, query and setActive
 *     - background:    Create a space in local storage for the provider
 *     - bMsgCenter:    Add a parameter for the new provider where setActiveProviders()
 *                      and querySearchProviders() are called
 *     - colorManager:  Add a new else if statement for your file and a new color
 *     - domCtrl:       Add a new global array named after the new provider and add an else if 
 *                      to initMatchManager()
 *     - messageModel:  Add a message.prototype.*name of new provider* for the new provider
 *                      and set to null 
 *     - popupCtrl:     Add a line for the new provider to each block of text within the 
 *                      document.addEventListener (reloading check value, updating the value
 *                      in local storage once the value is updated, add the current active value
 *                      to the message -> msg.*name of new provider* = *item in local storage*, 
 *                      and inside document.getElementById("applyAll").onclick method)
 *     - popup/options: Add a new checkbox for the new provider and give it an id that will 
 *                      be used in popupCtrl to set and get its current checked value
 */

bits.search.ISearchProvider = function() {};

bits.search.ISearchProvider.prototype.query = function(document) {};

bits.search.ISearchProvider.prototype.init = function() {};

bits.search.ISearchProvider.prototype.setActive = function(active) {};

bits.search.ISearchProvider.prototype.getActive = function() {};
