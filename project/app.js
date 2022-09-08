
const getElement = inputId => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue
}

const handleSubmit = () => {
    const input = getElement('todo-text');
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    // console.log(todos)
    // console.log(...todos)
    if (!todos) {
        const todoList = [
            {
                title: input,
                completed: false
            }
        ];
        localStorage.setItem('TODOS', JSON.stringify(todoList));
    } else {
        const todoList = [
            ...todos,
            {
                title: input,
                completed: false
            }
        ];
        localStorage.setItem('TODOS', JSON.stringify(todoList));
    };
    render();
};

const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    const ul = document.getElementById('todo-list');
    ul.textContent = '';
    todos.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('py-2')
        li.innerText = item.title;
        ul.appendChild(li);
    })
};
render();

const handleClearAll = () => {
    localStorage.removeItem('TODOS');
    render();
}
