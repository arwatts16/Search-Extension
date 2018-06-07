// Waits for popup to be loaded before it begins executing code
document.addEventListener('DOMContentLoaded', function(event) {
  var activeChecked = localStorage.getItem('active');
  if (activeChecked === 'true') {
    document.getElementById('Active').checked = true;
  } else {
    document.getElementById('Active').checked = false;
  }

  var uomChecked = localStorage.getItem('uomActive');
  if (uomChecked === 'true') {
    document.getElementById('uomActive').checked = true;
  } else {
    document.getElementById('uomActive').checked = false;
  }

  var nxChecked = localStorage.getItem('nxActive');
  if (nxChecked === 'true') {
    document.getElementById('nxActive').checked = true;
  } else {
    document.getElementById('nxActive').checked = false;
  }

  var cxChecked = localStorage.getItem('cxActive');
  if (cxChecked === 'true') {
    document.getElementById('cxActive').checked = true;
  } else {
    document.getElementById('cxActive').checked = false;
  }

  var match = localStorage.getItem('match');
  if (match === 'true') {
    document.getElementById('match').checked = true;
    match = 'exact';
  } else {
    document.getElementById('match').checked = false;
  }

  // if saved, then update the settings in memory
  document.getElementById('Save').onclick = function(e) {
    // save options into local storage
    localStorage.setItem('active', document.getElementById('Active').checked);
    localStorage.setItem('uomActive', document.getElementById('uomActive').checked);
    localStorage.setItem('nxActive', document.getElementById('nxActive').checked);
    localStorage.setItem('cxActive', document.getElementById('cxActive').checked);
    localStorage.setItem('match', document.getElementById('match').checked);

    //builds message to be sent to domCtrl
    var msg = new message();
    msg.message = 'update';
    msg.allActive = localStorage.getItem('active');
    msg.uom = localStorage.getItem('uomActive');
    msg.nx = localStorage.getItem('nxActive');
    msg.cx = localStorage.getItem('cxActive');
    msg.match = match;

    // alert the content script that a change has been made
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {});
      window.close();
    });
  };
});
