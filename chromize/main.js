// disable page to be changed
window.ondragover = function(e) { e.preventDefault(); return false; };
window.ondrop = function(e) { e.preventDefault(); return false; };

var archon = require('chromeos-apk');
var fs = require('fs');
var path = require('path');

var b = document.body;
var save = document.getElementById('save');
var dirpath = document.getElementById('dirpath');

b.ondragover = b.ondragenter = function (e) { 
	if( validate(e.dataTransfer.files) )
		b.className = "hover";
	else
		b.className = "error";
	return false; 
};
b.ondragleave = function() { this.className = ''; return false; };
b.ondrop = function (e) {
  e.preventDefault();
  if( b.className === "error" )
  	return this.className = '', false;

  process.argv = ['', '', e.dataTransfer.files[0].path, '--archon'];
  archon(function(apk){
  	dirpath.value = apk;
  	save.click();
  });
  this.className = '';
  return false;
};

save.onchange = function (e) {
	fs.rename(dirpath.value, this.value + path.sep + dirpath.value, function() {
		// something to finalize ?
	});
};

function validate(files) {
	return files.length > 0 && files[0].path.match(/\.apk$/);
}