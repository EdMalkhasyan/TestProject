"use strict"

const body = document.querySelector('body')
const button = document.createElement('button')
const wrapper = document.querySelector('.wrapper')

button.innerHTML = 'Get a cup of tea'
button.classList.add('button')
body.appendChild(button)

button.addEventListener('click', () => {
    wrapper.style.display = 'block'
    body.style.background = '#607b8d'
    body.removeChild(button)
})