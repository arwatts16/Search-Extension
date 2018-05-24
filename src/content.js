// global variables saying what and when to highlight
var active = false;
var input1 = { keywords: [] };
var input2 = { keywords: [] };

// when options or popup saves, this updates the global values
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == 'update') {
    var j = 0;
    active = msg.active;
    input1.keywords = msg.input1.split(/(\W)/ && ' ');
    input2.keywords = msg.input2.split(/(\W)/ && ' ');
  }
  alert(active + '\n' + input1.keywords + '\n' + input2.keywords);
});

//Node iterator goes through and finds matches from input 1 and 2
var nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
var textNode = null;
var numNodes = 0;
var data;
var numMatches1 = 0;
var numMatches2 = 0;

while ((textNode = nodeIterator.nextNode()) !== null) {
  data = textNode.data;
  sepWords = data.split(/[^A-Za-z]/);
  for (var i = 0; i < input1.length; i++) {
    if (sepWords.include(input1[i])) {
      numMatches1++;
    }
  }
  for (var i = 0; i < input2.length; i++) {
    if (sepWords.include(input2[i])) {
      numMatches2++;
    }
  }
}
