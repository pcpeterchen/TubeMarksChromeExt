//Convert seconds to h:m:s
function convertTime(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    if (s < 10) {
    	s = '0' + s; 
    }

    if (h == 0){
    	return m + ":" + s; 
    }
    else {
    	return h + ":" + m + ":" + s;
    }
}

//When add button is clicked
function buttonAdd() {
	var site = document.URL;
	time = $('video').get(0).currentTime;
	time = parseInt(time, 10);
	x = localStorage.getItem(site);
	if (x == null) {
		var timearray = [];
		timearray.push(time);
		localStorage.setItem(site, JSON.stringify(timearray));
		createButton(time);
	} 
	else {
		timearray = JSON.parse(localStorage.getItem(site));
		if (timearray.indexOf(time) == -1) {
			timearray.push(time);
			localStorage.setItem(site, JSON.stringify(timearray));
			createButton(time);
		}
	}
}

//Creates button
function createButton(timepoint) {
	var dispTime = convertTime(parseInt(timepoint, 10));
	var r = $('<div id='+ timepoint + ' style="float: left"> <input type="button"  ID='+ timepoint + ' value=' + dispTime + '> <a href="#" class="removeclass">Remove</a> </div>');
	timepoint = parseInt(timepoint, 10);
	r.click(function() {
		$('video').get(0).currentTime = timepoint;
	});

	$("#watch-headline-title").append(r);
}

//remove button function
$("body").on("click",".removeclass", function(e){ 
	var site = document.URL;
	timearray = JSON.parse(localStorage.getItem(site));
	timepoint = parseInt($(this).parent('div').attr("id"), 10);
	var index = timearray.indexOf(timepoint);
	if (index > -1) {
		timearray.splice(index, 1);
		localStorage.setItem(site, JSON.stringify(timearray));
		$(this).parent('div').prop("disabled",true);
		$(this).parent('div').remove();
	}
});

//for sorting integers
function compStr(a, b) {
	return a - b;
}

// On page load, add all buttons
function display() {
	var r = $('<div style="float: left"><input type="button" value=Add ></div>');
	r.click(function() {
		buttonAdd();
	});
	$("#watch-headline-title").append(r);
	var site = document.URL;
	timearray = JSON.parse(localStorage.getItem(site));
	if (timearray != null) {
		timearray = timearray.sort(compStr);
		for (i = 0; i < timearray.length; i++) {
			if (! $( "#" + timearray[i]).length ) {
				createButton(timearray[i]);
			}
		}
	}	
}
window.onload = display();

