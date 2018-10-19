var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
const Code = [
    `ArrowUp`,
    `ArrowUp`,
    `ArrowDown`,
    `ArrowDown`,
    `ArrowLeft`,
    `ArrowRight`,
    `ArrowLeft`,
    `ArrowRight`,
    `b`,
    `a`
  ];

function init() {
  let step = 0;
  document.body.addEventListener(`keydown`, function(press) {
    const button = allowedKeys[e.keyCode];
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
