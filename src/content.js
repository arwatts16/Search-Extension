//alert("You're on a new page!!");

chrome.runtime.onMessage.addListener(gotMessage); // if it gets a message, execute got Message

function gotMessage(message, sender, sendResponse){

    console.log(message);
    
}