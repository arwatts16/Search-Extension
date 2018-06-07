// This class controls the Dom and manipulates the content of the browser
var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.domCtrl = function() {};
var dataArr = [];
var uomFound = [];
var nxFound = [];
var cxFound = [];
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == 'update') {
    //adjust values of msg
    msg.message = 'send array';
    msg.pageBody = document.body.innerText;

    // send message to appMain requesting data
    chrome.runtime.sendMessage(msg, function() {});
  }
  if (msg.message == 'sent data') {
    console.log('got data from background');
    dataArr = msg.data;
    bits.search.domCtrl.prototype.initMatchManager(msg);
  }
});

bits.search.domCtrl.prototype.findMatches = function(found, wholeData) {
  var body = document.body.innerText;
  var matcher = new bits.search.matchManager();
  for (var i = 0; i < wholeData.data.length; i++) {
    wholeData.data[i].name = wholeData.data[i].name.replace(/[^A-Za-z0-9_ ]/g, '');
    if (matcher.matchAny(body, wholeData.data[i])) {
      found.push(wholeData.data[i]);
    }
  }
};

bits.search.domCtrl.prototype.initMatchManager = function(message) {
  bits.search.domCtrl.prototype.reload();
  for (var i = 0; i < dataArr.length && message.allActive === 'true'; i++) {
    if (dataArr[i].active === 'true') {
      if (dataArr[i].data[0].source === 'uomFile') {
        bits.search.domCtrl.prototype.findMatches(uomFound, dataArr[i]);
        bits.search.domCtrl.prototype.applyMatches(uomFound);
      } else if (dataArr[i].data[0].source === 'nxFile') {
        bits.search.domCtrl.prototype.findMatches(nxFound, dataArr[i]);
        bits.search.domCtrl.prototype.applyMatches(nxFound);
      } else if (dataArr[i].data[0].source === 'cxSearch') {
        bits.search.domCtrl.prototype.findMatches(cxFound, dataArr[i]);
        bits.search.domCtrl.prototype.applyMatches(cxFound);
      }
    }
  }
};

bits.search.domCtrl.prototype.initBrowser = function() {};

bits.search.domCtrl.prototype.applyMatches = function(found) {
  var nodeIterator = null;
  nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
  var textNode = null;

  while ((textNode = nodeIterator.nextNode()) !== null) {
    var parent = textNode.parentNode;
    for (var i = 0; i < found.length; i++) {
      var re = RegExp('\\b' + found[i].name + '\\b');
      if (re.test(textNode.data)) {
        var ind = textNode.data.search(re);
        textNode.data = textNode.data.slice(0, ind) + textNode.data.slice(ind + found[i].name.length);
        var newNode = textNode.splitText(ind);
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(found[i].name));
        var colMan = new bits.search.colorManager();
        span.style.backgroundColor = colMan.getColor(found[i]);
        span.className = found[i].source + ' highlighted';
        span.id = i;
        parent.insertBefore(span, newNode);
        textNode = nodeIterator.nextNode();
        textNode = nodeIterator.nextNode();
      }
    }
  }
  var matches = document.getElementsByClassName(found[0].source + ' highlighted');
  for (var i = 0; i < matches.length; i++) {
    matches[i].onclick = function(e) {
      var popup = open('', 'Popup', 'width=300,height=200');
      var name = popup.document.createElement('h3');
      var nameText = popup.document.createTextNode('Name: ' + found[e.srcElement.id].name);
      name.appendChild(nameText);
      popup.document.body.appendChild(name);
      var type = popup.document.createElement('h3');
      var typeText = popup.document.createTextNode('Type: ' + found[e.srcElement.id].type);
      type.appendChild(typeText);
      popup.document.body.appendChild(type);
      var subtype = popup.document.createElement('h3');
      var subtypeText = popup.document.createTextNode('Subtype: ' + found[e.srcElement.id].subtype);
      subtype.appendChild(subtypeText);
      popup.document.body.appendChild(subtype);
      var source = popup.document.createElement('h3');
      var sourceText = popup.document.createTextNode('Source: ' + found[e.srcElement.id].source);
      source.appendChild(sourceText);
      popup.document.body.appendChild(source);
    };
  }
};

bits.search.domCtrl.prototype.reload = function() {
  var matches = document.getElementsByClassName('highlighted');
  var parent;

  for (var i = 0; document.getElementsByClassName('highlighted').length !== 0; ) {
    parent = matches[i].parentNode;
    matches[i].parentNode.innerHTML = parent.innerHTML.replace(matches[0].outerHTML, matches[0].innerText);
  }

  if (document.getElementsByClassName('highlighted').length !== 0) {
    bits.search.domCtrl.prototype.reload();
  }
};
