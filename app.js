/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable linebreak-style */
/* eslint-disable no-cond-assign */
/* eslint-disable linebreak-style */
const mySwitch = document.getElementById('check');
mySwitch.addEventListener('click', () => {
  if (mySwitch.checked === true) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else if (mySwitch.checked === false) {
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = 'black';
  }
});
