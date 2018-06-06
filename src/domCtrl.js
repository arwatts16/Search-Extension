// This class controls the Dom and manipulates the content of the browser
var bits = function() {};
bits.search = function() {};

//Constructor
bits.search.domCtrl = function() {};
var dataArr = [];
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == 'update') {
    chrome.runtime.sendMessage(
      {
        message: 'send array',
        allActive: msg.allActive,
        uom: msg.uom,
        nx: msg.nx,
        cx: msg.cx,
        pageBody: document.body.innerText
      },
      function() {}
    );
  }
  if (msg.message == 'sent data') {
    console.log('got data from background');
    dataArr = msg.data;
    bits.search.domCtrl.prototype.reload();
    for (var i = 0; i < dataArr.length && msg.allActive === 'true'; i++) {
      if (dataArr[i].active === 'true') {
        bits.search.domCtrl.prototype.applyMatches(dataArr[i]);
      }
    }
  }
});

//bits.search.domCtrl.document = null;

//bits.search.domCtrl.browser = null;

bits.search.domCtrl.prototype.initMatchManager = function() {};

bits.search.domCtrl.prototype.initBrowser = function() {};

bits.search.domCtrl.prototype.applyMatches = function(searchRes) {
  var nodeIterator = null;
  nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
  var textNode = null;
  var body = document.body.innerText;
  var foundData = [];
  var matcher = new bits.search.matchManager();
  for (var i = 0; i < searchRes.data.length; i++) {
    searchRes.data[i].name = searchRes.data[i].name.replace(/[^A-Za-z0-9_ ]/g, '');
    if (matcher.matchAny(body, searchRes.data[i])) {
      foundData.push(searchRes.data[i]);
    }
  }

  while ((textNode = nodeIterator.nextNode()) !== null) {
    var parent = textNode.parentNode;
    var data = textNode.data;
    for (var i = 0; i < foundData.length; i++) {
      var re = RegExp('\\b' + foundData[i].name + '\\b');
      if (re.test(textNode.data)) {
        var ind = textNode.data.search(re);
        textNode.data = textNode.data.slice(0, ind) + textNode.data.slice(ind + foundData[i].name.length);
        var newNode = textNode.splitText(ind);
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(foundData[i].name));
        var colMan = new bits.search.colorManager();
        span.style.backgroundColor = colMan.getColor(foundData[i]);
        span.className = 'highlighted';
        span.id = i;
<<<<<<< HEAD
=======

        span.onclick = function() {
          var popup = open('', 'Popup', 'width=300,height=200');
          var type = popup.document.createElement('h3');
          var typeText = popup.document.createTextNode('Type: ');
          type.appendChild(typeText);
          popup.document.body.appendChild(type);
        };
>>>>>>> 0c669ef3acae0625fc070d0202730a78fcf04e21
        parent.insertBefore(span, newNode);
        textNode = nodeIterator.nextNode();
        textNode = nodeIterator.nextNode();
      }
    }
  }
  var matches = document.getElementsByClassName('highlighted');
  for (var i = 0; i < matches.length; i++) {
    matches[i].onclick = function(e) {
      var popup = open('', 'Popup', 'width=300,height=200');
      var name = popup.document.createElement('h3');
      var nameText = popup.document.createTextNode('Name: ' + foundData[e.srcElement.id].name);
      name.appendChild(nameText);
      popup.document.body.appendChild(name);
      var type = popup.document.createElement('h3');
      var typeText = popup.document.createTextNode('Type: ' + foundData[e.srcElement.id].type);
      type.appendChild(typeText);
      popup.document.body.appendChild(type);
      var subtype = popup.document.createElement('h3');
      var subtypeText = popup.document.createTextNode('Subtype: ' + foundData[e.srcElement.id].subtype);
      subtype.appendChild(subtypeText);
      popup.document.body.appendChild(subtype);
      var source = popup.document.createElement('h3');
      var sourceText = popup.document.createTextNode('Source: ' + foundData[e.srcElement.id].source);
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
