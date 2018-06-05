// keeps track of the word matches

//Constructor
bits.search.matchManager = function() {};

bits.search.matchManager.prototype.matches = [];

bits.search.matchManager.prototype.matchAny = function(str, seRes) {
  var re = RegExp('\\b' + seRes.name + '\\b', 'i');
  if (re.test(str)) {
    bits.search.matchManager.prototype.matches.push(seRes);
    return true;
  }
};
