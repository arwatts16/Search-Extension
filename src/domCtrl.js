// This class controls the Dom and manipulates the content of the browser
var bits = function() {};
bits.search = function() {};
//Constructor
bits.search.domCtrl = function() {};
var dataArr = [];
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == 'update') {
    alert('update message caught');
    chrome.runtime.sendMessage({ message: 'send array' }, function() {});
  }
  if (msg.message == 'sent data') {
    console.log('got data from background');
    dataArr = msg.data;
    bits.search.domCtrl.prototype.applyMatches(dataArr);
  }
});

//bits.search.domCtrl.document = null;

//bits.search.domCtrl.browser = null;

bits.search.domCtrl.prototype.initMatchManager = function() {};

bits.search.domCtrl.prototype.initBrowser = function() {};

bits.search.domCtrl.prototype.applyMatches = function(searchRes) {
  reload();
  var nodeIterator = null;
  nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
  var textNode = null;
  var namesArr = [];
  for (var i = 0; i < searchRes.length; i++) {
    namesArr[i] = searchRes[i].name;
  }
  while ((textNode = nodeIterator.nextNode()) !== null) {
    var parent = textNode.parentNode;
    var data = textNode.data;
    var sepWords = data.split(/(\W)/);
    for (var i = 0; i < sepWords.length; i++) {
      if (namesArr.includes(sepWords[i])) {
        var re = RegExp('\\W+' + sepWords[i] + '+\\W');
        var ind = textNode.data.search(re);
        textNode.data = textNode.data.slice(0, ind + 1) + textNode.data.slice(ind + 1 + sepWords[i].length);
        var newNode = textNode.splitText(ind + 1);
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(sepWords[i]));
        var colMan = new bits.search.colorManager();
        span.style.backgroundColor = colMan.getColor(searchRes[0]);
        span.className = 'highlighted';
        parent.insertBefore(span, newNode);
        textNode = nodeIterator.nextNode();
        textNode = nodeIterator.nextNode();
      }
    }
  }
  function reload() {
    var matches = document.getElementsByClassName('highlighted');
    var parent;

    if (document.getElementsByClassName('highlighted').length !== 0) {
      for (var i = 0; i < matches.length; i++) {
        parent = matches[i].parentNode;
        matches[i].parentNode.innerHTML = parent.innerHTML.replace(matches[0].outerHTML, matches[0].innerText);
      }
    }

    if (document.getElementsByClassName('highlighted').length !== 0) {
      reload();
    }
  }
};
