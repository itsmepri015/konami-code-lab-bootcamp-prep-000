const Code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	


  


function init() {
  let step = 0;
  document.body.addEventListener(`keydown`, function(press) {
    const button = press.key;
    if (button === Code[step]) {
      step++;
      if (step === 9) {
        alert(`Konami Code entered!`);
        step = 0;
      }
    } else {
      step = 0;
    }
  });
}
