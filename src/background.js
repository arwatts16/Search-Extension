var name =  ['active', 'uomActive', 'nxActive', 'cxActive', 'match', 'uomColor', 'nxColor', 'cxColor'];
var value = ['false' , 'false'    , 'false'   , 'false'   , 'false', '#ffff00' , '#66ffff', '#ffb733'];

for(var i = 0; i < name.length; i++){
    localStorage.setItem(name[i], value[i]);
}

/**
 * @constructor
 */
var app = new bits.search.appMain();
