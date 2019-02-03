
var button = document.getElementById('medinfo')

const checkboxes = () => {
  var radios = document.querySelectorAll('.radio')
  console.log()
  Array.from(radios).forEach(radio => {
    radio.checked = true
  })
  document.querySelector('#special').checked = true
}

const uncheckboxes = () => {
  var radios = document.querySelectorAll('.radio')
  console.log()
  Array.from(radios).forEach(radio => {
    radio.checked = false
  })
}

button.onclick = e => {
  checkboxes()
  e.target.disabled = true
  e.preventDefault()
}

var button2 = document.getElementById('visioncert')

button2.onclick = e => {
  e.target.disabled = true
}

uncheckboxes()
