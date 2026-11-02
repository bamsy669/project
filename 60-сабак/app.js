const input = document.querySelector('#inputText')
const add = document.querySelector('#add')
const list = document.querySelector('#list')

add,onclick=(e)=>{
    e.preventDefault()
    console.log(input.value);
    if(!input.value) return

//liTag

const liTag = document.createElement('li)')
list.appendChild(liTag)
liTag.className='list-group-item D-flex justify-content-between aligh-items-center'

//span
const spanTag = document.createElement('span')
liTag.appendChild(span)
spanTag.innerHTML=input.value

//delete
const delBtn = document.createElement('button')
liTag.appendChild(delBtn)
delBtn.innerHTML= '<i class="bi bi-trash3-fill"></i>'
delBtn.className='btn btn-outline-danger'

delBtn.onclick=()=>{
    liTag.remove()
}

input.value=''
    
}

