var bits = function() {};
bits.search = function() {};

/*
 * Waits for popup to be loaded before it begins executing code
 */ 
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("Active").checked = bits.search.assignTrueFalse("active");
  document.getElementById("uomActive").checked = bits.search.assignTrueFalse("uomActive");
  document.getElementById("nxActive").checked = bits.search.assignTrueFalse("nxActive");
  document.getElementById("cxActive").checked = bits.search.assignTrueFalse("cxActive");

 /*
  *  If saved, then update the settings in memory
  */
  document.getElementById("Save").onclick = function(e) {
    // save options into local storage
    localStorage.setItem("active", document.getElementById("Active").checked);
    localStorage.setItem("uomActive", document.getElementById("uomActive").checked);
    localStorage.setItem("nxActive", document.getElementById("nxActive").checked);
    localStorage.setItem("cxActive", document.getElementById("cxActive").checked);

    // builds message to send to content scripts
    var msg = new message();
    msg.message = "update";
    msg.allActive = localStorage.getItem("active");
    msg.uom = localStorage.getItem("uomActive");
    msg.nx = localStorage.getItem("nxActive");
    msg.cx = localStorage.getItem("cxActive");

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
