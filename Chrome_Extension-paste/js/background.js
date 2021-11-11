// for performing a task after installation
chrome.runtime.onInstalled.addListener( function () {
  chrome.storage.local.get( 'installed', function ( a ) {
    chrome.tabs.create( {
      url: chrome.runtime.getURL( "pages/Website.html" )
    }, function ( tab ) {} );
  } );
} );
