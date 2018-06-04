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

  var cxChecked = localStorage.getItem('cxActive');
  if (cxChecked === 'true') {
    document.getElementById('cxActive').checked = true;
  } else {
    document.getElementById('cxActive').checked = false;
  }

  // if saved, then update the settings in memory
  document.getElementById('Save').onclick = function(e) {
    // save options into local storage
    localStorage.setItem('active', document.getElementById('Active').checked);
    localStorage.setItem('uomActive', document.getElementById('uomActive').checked);
    localStorage.setItem('cxActive', document.getElementById('cxActive').checked);

    // alert the content script that a change has been made
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
<<<<<<< HEAD
          message: "update",
          allActive: localStorage.getItem("active"),
          uom: localStorage.getItem("uomActive"),
          cx: localStorage.getItem("cxActive")
=======
          message: 'update',
          active: localStorage.getItem('active'),
          uom: localStorage.getItem('uomActive'),
          cx: localStorage.getItem('cxActive')
>>>>>>> Issue77
        },
        function(response) {
          window.close();
        }
      );
    });
  };
});
