const getData = async () => {
    // Using JSONPlaceholder's todos API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    
    // Display the data in a more readable format
    const container = document.getElementById('data-container');
    const todoList = data.slice(0, 5).map(todo => 
        `<div class="todo-item">
            <h3>Task ${todo.id}: ${todo.title}</h3>
            <p>Completed: ${todo.completed ? '✅' : '❌'}</p>
        </div>`
    ).join('');
    
    container.innerHTML = todoList;
    return data;
}

getData();
