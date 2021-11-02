document.addEventListener('DOMContentLoaded', function(){
    console.log("yep");
    document.querySelector('button').addEventListener('click', onclick, false)
    console.log("yep");

    function onclick() {chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        chrome.tabs.sendMessage(tab.id, "12345abc"
);
      });
    }
}, false)

        