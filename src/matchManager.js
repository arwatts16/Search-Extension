// keeps track of the word matches

//Constructor
bits.search.matchManager = function() {};

bits.search.matchManager.prototype.matches = [];

bits.search.matchManager.prototype.findMatches = function(type, str, seRes) {
  if (type === "exact") {
    return bits.search.matchManager.prototype.matchCase(str, seRes);
  } else {
    return bits.search.matchManager.prototype.matchAny(str, seRes);
  }
};

bits.search.matchManager.prototype.matchAny = function(str, seRes) {
  var re = RegExp("\\b" + seRes.name + "\\b");
  if (re.test(str)) {
    bits.search.matchManager.prototype.matches.push(seRes);
    return true;
  }
};

bits.search.matchManager.prototype.matchCase = function(str, seRes) {
  var re = RegExp("\\b" + seRes.name + "\\b", "i");
  seRes;
  if (re.test(str)) {
    bits.search.matchManager.prototype.matches.push(seRes);
    return true;
  }
};
