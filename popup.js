// Currently unused.  Test of button push. 
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  renderStatus('not deleted');
  var button = document.getElementById('button');
  button.addEventListener('click', function() {
        renderStatus('deleted');
        var site = document.URL;
        localStorage.removeItem(site);
        var myElem = document.getElementById(site);
        myElem.innerHTML = '';
  });
});