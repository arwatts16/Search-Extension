
$("#userinput1").change(function(e){
    $(this).css("background-color", "#D6D6FF");
});

$("#userinput2").change(function(s){
    $(this).css("background-color", "#D6D6FF");
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