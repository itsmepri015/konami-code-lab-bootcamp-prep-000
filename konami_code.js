const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	

let index = 0;
  function init() {
  
  let index = 0;
  
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;
    index = (codes[index] === key) ? ++index : 0
    
    if (index === codes.length) {
      window.alert ('Well Done!');
      index = 0;
    }
  });
} 