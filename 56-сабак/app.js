// const title = window.document.getElementsByTagName('h1')
// const text = document.getElementsByClassName('text')
// const hi = document.getElementById('hi')


const title = document.querySelectorAll('h1')
const text = document.querySelectorAll('.text')
const hi = document.querySelector('#hi')

//innerText, innerHTML, textContent

title[1].innerHTML="<i>My student</i>"

text[0].style.color="green"
text[0].style.backgroundColor="black"
text[0].innerHTML="I'm a new text, Hello"
console.log([0]);

