var bits = function() {};
bits.search = function() {};

var knownChecked = ['active', 'uomActive', 'nxActive', 'nxActive', 'cxActive', 'match'];
var knownColor =   ['uomColor', 'nxColor', 'cxColor'];

/*
 * Waits for popup to be loaded before it begins executing code
 */ 
document.addEventListener("DOMContentLoaded", function(event) {
  for(var i = 0; i < knownChecked.length; i++){
    document.getElementById(knownChecked[i]).checked = bits.search.assignTrueFalse(knownChecked[i]);
  }
  for(var i = 0; i < (knownColor.length); i++){
    document.getElementById(knownColor[i]).value = localStorage.getItem(knownColor[i]);  
  }

 /*
  *  If saved, then update the settings in memory
  */
  document.getElementById("Save").onclick = function(e) {
    // save options into local storage
    for(var i = 0; i < knownChecked.length; i++){
      localStorage.setItem(knownChecked[i], document.getElementById(knownChecked[i]).checked);
    }
    for(var i = 0; i < (knownColor.length); i++){
      localStorage.setItem(knownColor[i], document.getElementById(knownColor[i]).value);
    }

    // builds message to send to content scripts
    var msg = new message();
    msg.message = "update";
    msg.allActive = localStorage.getItem("active");
    msg.uom = localStorage.getItem("uomActive");
    msg.nx = localStorage.getItem("nxActive");
    msg.cx = localStorage.getItem("cxActive");
    msg.match = match;

    // gives message to pMsgCenter to be sent to cMsgCenter
    bits.search.pMsgCenter.send(msg);
    };

  document.getElementById("applyAll").onclick = function(e) {
    // check all searchProvider boxes
    document.getElementById("uomActive").checked = true;
    document.getElementById("nxActive").checked = true;
    document.getElementById("cxActive").checked = true;
  };
});

/*
 *  assigns booleans depending on string "true"/"false" value in storage
 */
bits.search.assignTrueFalse = function(name) {
  var match = localStorage.getItem(name);
  if (match === "true") return true; 
  else return false;
};
