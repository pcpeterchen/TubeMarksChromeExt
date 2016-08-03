document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 67) {
		var timevalue = document.getElementsByClassName("ytp-time-current")[0].innerHTML;	
		var time = timevalue;
		var obj = {};
		obj[time] = timevalue;
		chrome.storage.local.set(obj);
		console.log(time);
	}
});

document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 82) {
		chrome.storage.local.get(null, function(items) {
			var allKeys = Object.keys(items);
			for(var key in allKeys) {
				console.log(allKeys[key]);
			}
		});
	}
});