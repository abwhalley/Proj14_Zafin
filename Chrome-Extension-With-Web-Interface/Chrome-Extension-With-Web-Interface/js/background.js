// for performing a task after installation
chrome.runtime.onInstalled.addListener( function ( object ) {
  chrome.storage.local.get( 'installed', function ( a ) {
    chrome.tabs.create( {
      url: chrome.runtime.getURL( "pages/Website.html" )
    }, function ( tab ) {} );
  } );
} );

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
  console.log(msg);
}

document.querySelector('openModal').addEventListener('click', function(){

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendmessage(activeTab.id, {command:"openModal"});
  });
});