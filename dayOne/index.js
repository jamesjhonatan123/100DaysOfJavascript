let count = 0;
const number = document.querySelector('#number')
number.innerHTML = count;
const subtract = document.querySelector('#subtract')
const reset = document.querySelector('#reset')
const add = document.querySelector('#add')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e) => {
  if (e.target.id === 'subtract') {
    number.innerHTML = --count
  }
  if (e.target.id === 'reset') {
    count = 0;
    number.innerHTML = count
  }
  if (e.target.id === 'add') {
    number.innerHTML = ++count
  }

  if (count < 0) {
    number.style.color = "red"
  } else if (count > 0) {
    number.style.color = "yellow"
  } else {
    number.style.color = "white"
  }

})
