const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	


  function init() {
  
  let index = 0;
  document.body.addEventListener('keydown', function(e){
    const key = e.key;
     if(key === codes[index]){
      index++;
       if(index === 9){
        alert("Yay! You did it!");
        index = 0;
      }
    }else{
      index = 0;
    }
}, false);
}	