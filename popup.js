function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  renderStatus('rekt');
  var button = document.getElementById('button');
  button.addEventListener('click', function() {
    chrome.storage.local.clear(function(obj){
      console.log("cleared");
    });
    renderStatus('memes');
  });

  chrome.tabs.executeScript({
    file: 'myscript.js'
  });
});