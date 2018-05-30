//Finds matches regardless of case

//Constructor
bits.SearchExtension.toLowerStringMatcher = function() {
  iMatcher.call(this);
};

bits.SearchExtension.toLowerStringMatcher.matches = function(s, searchRes) {};
