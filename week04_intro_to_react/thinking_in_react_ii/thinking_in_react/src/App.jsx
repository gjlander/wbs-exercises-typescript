import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import Nav from './components/Nav';

const App = () => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('theme')) || true
    );
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    );
    const [filter, setFilter] = useState('all');
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });
    return (
        <div
            className={`p-4 min-h-screen w-screen dark:bg-slate-600 ${
                isDark && 'dark'
            }`}
        >
            <Nav isDark={isDark} setIsDark={setIsDark} />
            <AddToDo setTodos={setTodos} />
            <FilterComponent setFilter={setFilter} />
            <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;
