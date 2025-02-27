import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('all');

  const toggleTodo = id => {
    setTodos(prevTodos => {
      const newState = prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <div className='container mx-auto p-4'>
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
