   
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log('Hello',msg);
});

const myInp = document.getElementById('Input');
    const btnCopy = document.getElementById('btnCopy');  

    btnCopy.onclick = function(tab){
        Input.select()
        document.execCommand("copy");
        };


function gotMessage(message, sender, sendResponse){
    console.log(message);
}
