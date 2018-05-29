// global variables saying what and when to highlight
var active = false;
var input1 = { keywords: [] };
var input2 = { keywords: [] };

// when options or popup saves, this updates the global values
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == "update") {
    active = msg.active;
    input1.keywords = msg.input1.split(/(\W)/);
    input2.keywords = msg.input2.split(/(\W)/);
    if (active === 'true') {
      findWords(input1.keywords, input2.keywords);
    } else {
      reload();
    }
  }
});

//Node iterator goes through and finds matches from input 1 and 2
function findWords(i1, i2) {
  if (input1.keywords != '' || input2.keywords != '') {
    var nodeIterator = null;
    nodeIterator = document.createNodeIterator(
      document.body,
      NodeFilter.SHOW_TEXT
    );
    var textNode = null;
    var numNodes = 0;

    while ((textNode = nodeIterator.nextNode()) !== null) {
      var parent = textNode.parentNode;
      var data = textNode.data;
      var sepWords = data.split(/(\W)/);
      var indArr = [];
      var parent;
      for (var i = 0; i < sepWords.length; i++) {
        if (i1.includes(sepWords[i])) {
          highlight('yellow');
        } else if (i2.includes(sepWords[i]) && !i2.includes('')) {
          highlight('#79f2ff');
        }
      }
      function highlight(color) {
        var re = RegExp('\\W+' + sepWords[i] + '+\\W');
        var ind = textNode.data.search(re);
        textNode.data = textNode.data.slice(0, ind + 1) + textNode.data.slice(ind + 1 + sepWords[i].length);
        var newNode = textNode.splitText(ind + 1);
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(sepWords[i]));
        span.style.backgroundColor = color;
        span.className = 'highlighted';
        parent.insertBefore(span, newNode);
        textNode = nodeIterator.nextNode();
        textNode = nodeIterator.nextNode();
      }
    }
  }
}

function reload() {
  var matches = document.getElementsByClassName('highlighted');
  var parent;

  for(var i = 0; i < matches.length; i++){
    parent = matches[i].parentNode;
    matches[i].parentNode.innerHTML = parent.innerHTML.replace(matches[0].outerHTML, matches[0].innerText); 
  }

  if(document.getElementsByClassName('highlighted') !== null){
    reload();
  }
}
