// global variables saying what and when to highlight
var active = false;
var input1 = { keywords: [] };
var input2 = { keywords: [] };

// when options or popup saves, this updates the global values
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.message == "update") {
    active = msg.active;
    input1.keywords = msg.input1.split(/(\W)/ && " ");
    input2.keywords = msg.input2.split(/(\W)/ && " ");
    if (active === "true") {
      findWords(input1.keywords, input2.keywords);
    } else {
      reload();
    }
  }
});

//Node iterator goes through and finds matches from input 1 and 2
function findWords(i1, i2) {

  if (input1.keywords != "" || input2.keywords != "") {
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
      var sepWords = data.split(/(\W)/ && " ");

      for (var i = 0; i < i1.length && i1 != ""; i++) {
        if (sepWords.includes(i1[i])) {
          textNode.data = sepWords.join(" ");
          var ind = textNode.data.indexOf(i1[i]);
          textNode.data = textNode.data.replace(i1[i], "");
          var newNode = textNode.splitText(ind);
          var span = document.createElement("span");
          span.appendChild(document.createTextNode(i1[i]));
          span.style.backgroundColor = "yellow";
          span.className = "highlighted";
          parent.insertBefore(span, newNode);
          textNode = nodeIterator.nextNode();
          textNode = nodeIterator.nextNode();
        }
      }
      for (var i = 0; i < i2.length && i2 != ""; i++) {
        if (sepWords.includes(i2[i])) {
          textNode.data = sepWords.join(" ");
          var ind = textNode.data.indexOf(i2[i]);
          textNode.data = textNode.data.replace(i2[i], "");
          var newNode = textNode.splitText(ind);
          var span = document.createElement("span");
          span.appendChild(document.createTextNode(i2[i]));
          span.style.backgroundColor = "#79f2ff";
          span.className = "highlighted";
          parent.insertBefore(span, newNode);
          textNode = nodeIterator.nextNode();
          textNode = nodeIterator.nextNode();
        }
      }
    }
  }
}

function reload() {
  var matches = document.getElementsByClassName('highlighted');
  var parent;

  for(var i = 0; i < matches.length; i++){
    parent = matches[i].parentNode
    matches[i].parentNode.innerHTML = parent.innerHTML.replace(matches[0].outerHTML, matches[0].innerText); 
  }

  if(document.getElementsByClassName('highlighted') !== null){
    reload();
  }
}
