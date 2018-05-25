// global variables saying what and when to highlight
var active = false;
var input1 = { keywords: [] };
var input2 = { keywords: [] };

// when options or popup saves, this updates the global values
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == "update") {
    var j = 0;
    active = msg.active;
    input1.keywords = msg.input1.split(/(\W)/ && " ");
    input2.keywords = msg.input2.split(/(\W)/ && " ");

    if (active === "true") {
      highlight();
    }
  }
});

function highlight() {
  // Checks to make sure there are keywords to search for
  if (input1.keywords != "" && input2.keywords != "") {
  }
}
