const button = document.querySelector('.button--translate');
const box = document.querySelector('.animated--translate');

button.addEventListener('click', () => {
  box.style.transform = 'translateX(500px)';
  
  
  requestAnimationFrame(() => {
    box.style.transition = 'transform 1s ease-in-out';
    box.style.transform = 'translateX(250px)';
  });
});