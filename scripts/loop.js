const button = document.querySelector('.button--loop')

// button.addEventListener('click', () => {
//   while(true);
// });


// function loop() {
//   console.log('ziemniok');
//   setTimeout(loop, 0);
// };

// button.addEventListener('click', () => {
//   loop();
// });


function loop() {
  Promise.resolve().then(loop);
};

button.addEventListener('click', () => {
  loop();
});