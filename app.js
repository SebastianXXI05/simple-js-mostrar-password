const password = document.querySelector('#password')
const btnControl = document.querySelector('#btn-control')
let control = false

btnControl.addEventListener('click', () => {
  control = !control
  if (control) {
    password.setAttribute('type', 'text')
    btnControl.textContent = 'H'
  }
  else {
    password.setAttribute('type', 'password')
    btnControl.textContent = 'S'
  }

})