//Finds matches regardless of case

//Constructor
bits.search.toLowerStringMatcher = function() {
  iMatcher.call(this);
};

bits.search.toLowerStringMatcher.matches = function(s, searchRes) {};
