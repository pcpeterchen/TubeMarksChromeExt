// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});
// Chrome Desktop Notification
function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'https://yt3.ggpht.com/-p-O21kZZDPs/AAAAAAAAAAI/AAAAAAAAAAA/an-88_jZWFI/s48-c-k-no-rj-c0xffffff/photo.jpg',
      body: "TubeMarks Erased!",
    });    
  }

}

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
		} 
		else {
			timearray = JSON.parse(localStorage.getItem(site));
			if (timearray.indexOf(time) == -1){
				timearray.push(time);
				localStorage.setItem(site, JSON.stringify(timearray));
			}
			console.log(timearray);
		}
	}
});

// On 'g' key, retrieve all bookmarks.  Display on the page, under the video. 
document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 71) {
		var	site = document.URL;
		console.log(site);
		timearray = JSON.parse(localStorage.getItem(site));
		console.log(timearray);

		var myElem = document.getElementById(site);
		if (myElem == null) {
		     //Create Labels
		     var myDiv = document.createElement("div");
		     myDiv.setAttribute("id", site);
		     myDiv.setAttribute("style", "font-weight:normal");
		     myDiv.setAttribute("cssFloat", "left");
		     myDiv.innerHTML = timearray;

	          // 'foobar' is the div id, where new fields are to be added
	          var foo = document.getElementById("watch7-views-info");

	          //Append the element in page (in span).
	          foo.appendChild(myDiv);
	   }
	   myElem.innerHTML = timearray;

	}
});

//On 'e' key, remove all bookmarks.
document.body.addEventListener('keyup', function(e) {
	if (e.keyCode == 69) {
		var	site = document.URL;
		localStorage.removeItem(site);
		var myElem = document.getElementById(site);
		myElem.innerHTML = '';
	}
});

