
Promise.resolve.then(console.log('pyra'));
console.log('kartofel')








button.addEventListener('click', () => {
  Promise.resolve().then(console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(console.log('Microtask 2'));
  console.log('Listener 2');
});