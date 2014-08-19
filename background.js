
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("Entered listener");
    if (request.type === 'request_domain') {
    	chrome.tabs.executeScript({code: 'document.domain'}, function(results){ 
    		console.log(results);
    		console.log("returning");
	    	sendResponse({domain:results});
    	});
    	return true;
    }
});
