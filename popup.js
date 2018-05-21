
// Waits for popup to be loaded before it begins executing code
document.addEventListener("DOMContentLoaded", function(event) { 

    //get the element1
    var input1 = document.getElementById('userinput1');

    // assign event handler1
    input1.onchange = function(e) {
        e.target.setAttribute('style', 'background-color:#D6D6FF');

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type:"text"}, function(response){
                console.log(response);
            });
        });
    }


    //get the element2
    var input2 = document.getElementById('userinput2');

    // assign event handler2
    input2.onchange = function(e) {
        e.target.setAttribute('style', 'background-color:#D6D6FF');
    }

});




/*
userInput1.input(Step2); //carry userInput1 to Step2 

    function Step2(){   //finds the current tab carries that too Step3
        let params = { currentView: true }

        chrome.tabs.query(params, Step3);
        
        function Step3(tab){    //sends current tab id and user input to the content script
            let message = userInput1.value();

            chrome.tabs.sendMessage(tab.id, message);
        }
    }
*/