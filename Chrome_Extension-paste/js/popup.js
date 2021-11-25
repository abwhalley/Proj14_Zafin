document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        chrome.tabs.sendMessage(tab.id, "A3245GH"
);
      });
    }
}, false)

        