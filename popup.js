
// Waits for popup to be loaded before it begins executing code
document.addEventListener("DOMContentLoaded", function(event) { 

    // gets active checkbox element
    var active = document.getElementById('Active');

    // assign event handler1
    active.onclick = function(e) {
        // toggles highlighting option on current tab
        // Doesn't save unless the save button is hit
    }

    //get the element1
    var input1 = document.getElementById('userinput1');

    // assign event handler2
    input1.onchange = function(e) {
        // search for input1.value words when user hits enter.
        // Doesn't save unless the save button is hit
    }

    //get the element2
    var input2 = document.getElementById('userinput2');

    // assign event handler3
    input2.onchange = function(e) {
        // search for input2.value words when user hits enter.
        // Doesn't save unless the save button is hit
    }

    //check if save button gets clicked
    var save = document.getElementById('Save');

    save.onclick = function(e) {
        console.log('save that stuff');
        // saves any changes above 
    } 

});

