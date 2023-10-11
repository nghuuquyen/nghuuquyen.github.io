export default function toDoList() {
    const storageKey = 'todos'; // Key for storing todos in local storage

    // Try to retrieve todos from local storage, or use an empty array if none is found
    const savedTodos = JSON.parse(localStorage.getItem(storageKey)) || [];

    const state = {
        newTodo: '',
        todos: savedTodos,
        addToDo() {
            this.todos.push({
                todo: this.newTodo,
                completed: false
            });

            this.newTodo = '';
            this.saveToLocalStorage(); // Save to local storage when a new todo is added
        },
        toggleToDoCompleted(index) {
            this.todos[index].completed = !this.todos[index].completed;
            this.saveToLocalStorage(); // Save to local storage when a todo's completion is toggled
        },
        deleteToDo(index) {
            this.todos = this.todos.filter((todo, todoIndex) => index !== todoIndex);
            this.saveToLocalStorage(); // Save to local storage after a todo is deleted
        },
        numberOfToDosCompleted() {
            return this.todos.filter(todo => todo.completed).length;
        },
        toDoCount() {
            return this.todos.length;
        },
        isLastToDo(index) {
            return this.todos.length - 1 === index;
        },
        saveToLocalStorage() {
            localStorage.setItem(storageKey, JSON.stringify(this.todos)); // Save the todos array to local storage
        }
    };

    return state;
}