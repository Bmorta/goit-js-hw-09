import { Notify } from 'notiflix/build/notiflix-notify-aio';

//DOM LINKS
const formElmt = document.querySelector('.form');
const delayElmt = document.querySelector('input[name="delay"]');
const stepElmt = document.querySelector('input[name="step"]');
const amountElmt = document.querySelector('input[name="amount"]');

//-------------------------------------------------------------

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    //async operation
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

//-------------------------------------------------------------

function handleSubmit(event) {
  event.preventDefault();
  let delayValue = Number(delayElmt.value);

  for (let i = 1; i <= amountElmt.value; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += Number(stepElmt.value);
    //delayvalue = delayvalue + Number(stepElmt.value)
  }
}

formElmt.addEventListener('submit', handleSubmit);
