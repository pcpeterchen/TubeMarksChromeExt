// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

//On 's' key, set a new bookmark from the video
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
			display();
		} 
		else {
			timearray = JSON.parse(localStorage.getItem(site));
			if (timearray.indexOf(time) == -1){
				timearray.push(time);
				localStorage.setItem(site, JSON.stringify(timearray));
			}
			console.log(timearray);
			display();
		}
	}
});

// On 'g' key, retrieve all bookmarks.  Display on the page, under the video. 
function display() {

	var	site = document.URL;
	console.log(site);
	timearray = JSON.parse(localStorage.getItem(site));
	console.log(timearray);

	var myElem = document.getElementById(site);
	if (myElem == null) {
		var myDiv = document.createElement("div");
		myDiv.setAttribute("id", site);
		myDiv.setAttribute("style", "font-weight:normal");
		myDiv.setAttribute("cssFloat", "left");
		myDiv.innerHTML = timearray;

		var foo = document.getElementById("watch7-views-info");
		foo.appendChild(myDiv);
	      }
	      myElem.innerHTML = timearray;	
}
window.onload = display;

//On 'e' key, remove all bookmarks.
document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 69) {
		var site = document.URL;
		localStorage.removeItem(site);
		var myElem = document.getElementById(site);
		myElem.innerHTML = '';
	}
});

