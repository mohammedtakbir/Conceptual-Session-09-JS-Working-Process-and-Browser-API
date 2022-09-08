const getInput = (Id) => {
    const inputField = document.getElementById(Id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const handleSubmit = () => {
    const inputText = getInput('todo-text');

    const getTodos = JSON.parse(localStorage.getItem('person'));
    if (!getTodos) {
        const setItem = [
            { Name: inputText, isCompleted: false }
        ]
        localStorage.setItem('person', JSON.stringify(setItem));
    } else {
        const setItem = [
            ...getTodos,
            { Name: inputText, isCompleted: false }
        ]
        localStorage.setItem('person', JSON.stringify(setItem));
    };
    render();
}

const render = () => {
    const getTodos = JSON.parse(localStorage.getItem('person'));
    const todoContainer = document.getElementById('todo-list');
    todoContainer.textContent = '';
    getTodos.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('py-2');
        li.innerText = item.Name;
        todoContainer.appendChild(li);
    })
}
render();

const handleClearAll = () => {
    localStorage.removeItem('person');
    render()
}