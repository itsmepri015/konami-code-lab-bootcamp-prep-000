
	

const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
	function init() {
  // Write your JavaScript code inside the init() function	  // Write your JavaScript code inside the init() function
   let codeCount = 0;
  
  document.body.addEventListener('keydown', function(e) {
    let keyPressed = e.key;
    if (keyPressed === updatedCode[codeCount]) {
      codeCount++;
      
      if (codeCount === updatedCode.length) {
        alert('Congratulations!');
        codeCount = 0;
      }
    } else {
      codeCount = 0;
    }
  });
} 	