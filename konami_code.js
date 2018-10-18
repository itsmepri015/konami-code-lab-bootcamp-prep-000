const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	

function init() {
  // your code here	  // your code here
  var i = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[i]) {
      i++;
      if (i === codes.length) {
        alert('You did it!');
        index = 0;
      }
    }else {
      index =0;
    }
  });
}	