document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.update({
     url: "http://8tracks.com/pcpetepete/meme-music"
   });
  }, false);
}, false);