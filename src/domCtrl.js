/*
* This class controls the Dom and manipulates the content of the browser
*/

var bits = function() {};
bits.search = function() {};

/*
* Constructor
*/
bits.search.domCtrl = function() {};

// Variables needed
var dataArr = [];
var uomFound = [];
var nxFound = [];
var cxFound = [];

/*
* This method uses the match manager to find all the matches in the DOM
*/
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

/*
* This method loops through the registered search providers and starts the match process
*/
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

/*
* Apply matches takes the list of found words and finds and highlights them on the page.
*/
bits.search.domCtrl.prototype.applyMatches = function(found) {
  var nodeIterator = null;
  nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
  var textNode = null;

  while ((textNode = nodeIterator.nextNode()) !== null) {
    var parent = textNode.parentNode;
    for (var i = 0; i < found.length; i++) {
      var re = RegExp('\\b' + found[i].name + '\\b');
      if (re.test(textNode.data)) {
        if (parent.className !== 'undefined' && parent.className.includes('highlighted')) {
          var colMan = new bits.search.colorManager();
          parent.style.backgroundColor = colMan.getColor(found[i]);
          parent.className = found[i].source + ' highlighted';
          parent.id = i;
        } else {
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
  }
  // makes a popup
  bits.search.domCtrl.prototype.createPopup(found);
};

/*
* Makes all the highlighted words a button that creates a unique popup when clicked
*/
bits.search.domCtrl.prototype.createPopup = function(found) {
  var matches = document.getElementsByClassName(found[0].source + ' highlighted');
  bits.search.dataPopupManager(matches, found);
};

/*
* This function removes highlights from non-active search providers
*/
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
