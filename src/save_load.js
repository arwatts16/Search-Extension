
// Waits for popup to be loaded before it begins executing code
document.addEventListener('DOMContentLoaded', function(event) { 
    
    // set up vars
    var active = {checked : document.getElementById('Active').checked};
    var input1 = {keywords : document.getElementById('userinput1').text};
    var input2 = {keywords : document.getElementById('userinput2').text};

    //reload all of the saved settings
    active = localStorage.activated;
    input1 = localStorage.userinput1; //array?
    input2 = localStorage.userinput2;

    // if the value is changed, then update the variables
    active.onclick = function(e) {active.checked = document.getElementById('Active').checked;}
    input1.onchange = function(e) {input1.keywords = document.getElementById('userinput1').keywords;}
    input2.onchange = function(e) {input2.keywords = document.getElementById('userinput2').keywords;}

    // if saved, then update the settings in memory
    document.getElementById('Save').onclick = function(e) {

        // save options into local storage
        localStorage.activated = active;
        localStorage.userinput1 = input1;
        localStorage.userinput1 = input2;

        // alert the content script that a change has been made
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "changed"}, function(response){});
          });
        
        //window.close();
    }
    

});