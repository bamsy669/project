//DOM onclick

// const click = document.querySelector('#click')
// const add = document.querySelector('#add')

// click.addEventListener('click', function(){
//     console.log("Test");
    
// })
 
// add.onclick=()=>{
//    console.log('add');
   
// }

const btns = document.querySelectorAll('button')
console.log(btns);
 
btns[0].onclick=()=>{
    window.document.body.style.backgroundColor=btns[0].innerText
}
btns[1].onclick=()=>{
    window.document.body.style.backgroundColor=btns[1].innerText
}
btns[2].onclick=()=>{
    window.document.body.style.backgroundColor=btns[2].innerText
}