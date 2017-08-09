chrome.tabs.onUpdated.addListener(function (okayId) {
	chrome.tabs.get(okayId, function (okay) {
		{
			if (okay.url.indexOf('instagram.com') > -1) {
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				  chrome.tabs.sendMessage(tabs[0].id, {cmd: "start"}, function(response) {
				  });
				});
			}
		}
	})
});