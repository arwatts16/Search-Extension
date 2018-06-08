/*
* Data Popup Manager takes the matches and attaches the data
*/

bits.search.dataPopupManager = function(matches, found) {
  for (var i = 0; i < matches.length; i++) {
    matches[i].onclick = function(e) {
      var strWindowFeatures = 'width=300,height=200,left=' + e.screenX + ',top=' + e.screenY;
      var popup = open('', 'Popup', strWindowFeatures);
      popup.window.screenX = e.screenX;
      popup.window.screenY = e.screenY;
      popup.document.title = 'Data';
      popup.document.getElementsByTagName('body')[0].innerHTML = '';
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
