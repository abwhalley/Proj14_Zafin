   
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log('Hello',msg);
});

const myInp = document.getElementById('Input');
const btnCopy = document.getElementById('btnCopy');  

    btnCopy.onclick = function(){
        Input.select()
        document.execCommand("copy");
        };

