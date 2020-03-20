step = 1;

const elementRequest = document.querySelector('.animated--request');
let leftRequest = parseInt(elementRequest.style.left, 10) || 0;

function animateRequest() {
  requestAnimationFrame(animateRequest);
  elementRequest.style.marginLeft = leftRequest + 'px';
  if (leftRequest === window.innerWidth) {
    leftRequest = 0;
    elementRequest.style.marginLeft = leftRequest + 'px';
  } else {
    leftRequest += step;
  }
}

const elementTimeout = document.querySelector('.animated--timeout');
let leftTimeout = parseInt(elementTimeout.style.left, 10) || 0;

function animateTimeout() {
  setTimeout(animateTimeout, 0);
  elementTimeout.style.marginLeft = leftTimeout + 'px';
  if (leftTimeout === window.innerWidth) {
    leftTimeout = 0;
  } else {
    leftTimeout += step;
  }
}

animateRequest();

animateTimeout();
