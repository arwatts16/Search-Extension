bits.search.matchManager = function() {};

/*
 * Holds the matches found 
 */
bits.search.matchManager.prototype.matches = [];

/*
 * Checks match to decide whether to search for exact matches or any match
 */
bits.search.matchManager.prototype.findMatches = function(type, str, seRes) {
  if (type === "true") {
    return bits.search.matchManager.prototype.matchCase(str, seRes);
  } else {
    return bits.search.matchManager.prototype.matchAny(str, seRes);
  }
};

/*
 * Finds any match regardless of case
 */
bits.search.matchManager.prototype.matchAny = function(str, seRes) {
  var re = RegExp("\\b" + seRes.name + "\\b");
  if (re.test(str)) {
    bits.search.matchManager.prototype.matches.push(seRes);
    return true;
  }
};

/*
 * Finds only exact matches
 */
bits.search.matchManager.prototype.matchCase = function(str, seRes) {
  var re = RegExp("\\b" + seRes.name + "\\b", "i");
  seRes;
  if (re.test(str)) {
    bits.search.matchManager.prototype.matches.push(seRes);
    return true;
  }
};
