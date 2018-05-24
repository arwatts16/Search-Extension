  
// Waits for popup to be loaded before it begins executing code
document.addEventListener('DOMContentLoaded', function(event) { 
    
    var checked = localStorage.getItem('active');
    if(checked === 'true') {
        document.getElementById('Active').checked = true;
    } 
    else { document.getElementById('Active').checked = false; }

    document.getElementById('userinput1').value = localStorage.getItem('input1');
    document.getElementById('userinput2').value = localStorage.getItem('input2');

    // if saved, then update the settings in memory
    document.getElementById('Save').onclick = function(e) {

        // save options into local storage
        localStorage.setItem('active', document.getElementById('Active').checked);
        localStorage.setItem('input1', document.getElementById('userinput1').value);
        localStorage.setItem('input2', document.getElementById('userinput2').value);

        // alert the content script that a change has been made
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {message : 'update'}, function(response) {
                //window.close();
            });
		});

    }
    

});