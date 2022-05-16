//Seletores
const todoInput = document.querySelector('.todo-input')
const btnAdd = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

// Eventos
document.addEventListener('DOMContentLoaded', getTodos)
btnAdd.addEventListener('click', addElement)
todoList.addEventListener('click', deleteCheck)

// Função
function addElement(event) {
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newElement = document.createElement('li')
        //newElement.innerText = 'Yoo'
    newElement.innerText = todoInput.value
    newElement.classList.add('todo-item')

    todoDiv.appendChild(newElement)

    saveLocalTodos(todoInput.value)

    //todoList.appendChild(todoDiv)

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add('complete-todo')
    todoDiv.appendChild(completeBtn)

    const excludeBtn = document.createElement('button')
    excludeBtn.innerHTML = '<i class="fas fa-trash"></i>'
    excludeBtn.classList.add('exclude-todo')
    todoDiv.appendChild(excludeBtn)

    todoList.appendChild(todoDiv)

    todoInput.value = ''
}

function deleteCheck(event) {

    const item = event.target;
    //console.log(item);

    if (item.classList[0] === 'exclude-todo') {

        const todo = item.parentElement
            //console.log(todo);
        removeLocalTodos(todo)
        todo.remove()
    }

    if (item.classList[0] === 'complete-todo') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function saveLocalTodos(todo) {
    let todos

    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {

    let todos

    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach((todo) => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const newElement = document.createElement('li')
            //newElement.innerText = 'Yoo'
        newElement.innerText = todo
        newElement.classList.add('todo-item')

        todoDiv.appendChild(newElement)

        //todoList.appendChild(todoDiv)

        const completeBtn = document.createElement('button')
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        completeBtn.classList.add('complete-todo')
        todoDiv.appendChild(completeBtn)

        const excludeBtn = document.createElement('button')
        excludeBtn.innerHTML = '<i class="fas fa-trash"></i>'
        excludeBtn.classList.add('exclude-todo')
        todoDiv.appendChild(excludeBtn)

        todoList.appendChild(todoDiv)

    })
}

function removeLocalTodos(todo) {
    let todos

    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText
    console.log(todoIndex)

    todos.splice(todos.indexOf(todoIndex), 1)

    localStorage.setItem('todos', JSON.stringify(todos))
}