const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	

let index = 0;
  function init() {
  
  document.addEventListener("keydown", function(e){
    const key = e.key;
     if(key === codes[index]){
      index++;
       if(index === codes.length - 1){
        alert("Yay! You did it!");
        index = 0;
      }
    }else{
      index = 0;
    }
}, false);
}	