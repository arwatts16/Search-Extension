// global variables saying what and when to highlight
var active = false;
var input1 = {keywords : []};
var input2 = {keywords : []};

// when options or popup saves, this updates the global values
chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
    if(msg.message == 'update'){
        var j = 0;
        active = msg.active;

        // resets keyword array (avoid issues with old # of keywords > new #)
        input1.keywords = [];
        input2.keywords = [];

        // store input1 keywords into an array
        for(var i = 0; j < msg.input1.length; i++){
            for(; msg.input1[j] !== ' ' && j < msg.input1.length; j++){
                if(input1.keywords[i] == undefined){
                    input1.keywords[i] = msg.input1[j];
                }
                else input1.keywords[i] += msg.input1[j];
            }
            j++;
        }
        
        // reset j and store input 2 keywords into an array
        j = 0;
        for(var i = 0; j < msg.input2.length; i++){
            for(; msg.input2[j] !== ' ' && j < msg.input2.length; j++){
                if(input2.keywords[i] == undefined){
                    input2.keywords[i] = msg.input2[j];
                }
                else input2.keywords[i] += msg.input2[j];
            }
            j++;
        }

    }

});