
document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 83) {
		var	site = document.URL;
		time = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
		x = localStorage.getItem(site);
		if (x == null) {
			var timearray = [];
			timearray.push(time);
			localStorage.setItem(site, JSON.stringify(timearray));
			console.log(timearray);
		} 
		else {
			timearray = JSON.parse(localStorage.getItem(site));
			console.log(timearray);
			timearray.push(time);
			localStorage.setItem(site, JSON.stringify(timearray));
			console.log(timearray);
		}
	}
});

document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 71) {
		var	site = document.URL;
		console.log(site);
		console.log(localStorage.getItem(site));
	}
});

document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 69) {
		var	site = document.URL;
		localStorage.removeItem(site);
	}
});