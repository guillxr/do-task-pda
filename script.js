const btnAdd = document.getElementById('btn-add')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

btnAdd.addEventListener('click', () => {
    let response = taskInput.value
    if(response === '') {
        alert('Digite algo')
    } else {
        let li = document.createElement('li')
        let button = document.createElement('button')
    
        button.className = 'btn-remove'
        li.textContent = response
    
        li.appendChild(button)
        taskList.appendChild(li)
    }
    taskInput.value = ''
})

// taskList.addEventListener('click', (e) => {
//     if(e.target.tagName)
// })