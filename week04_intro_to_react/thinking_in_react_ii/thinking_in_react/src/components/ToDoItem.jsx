const ToDoItem = ({ todo, toggleTodo }) => {
    return (
        <li className='flex items-center mb-2'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className='mr-2'
            />
            <p className={todo.completed && 'line-through'}>{todo.text}</p>
        </li>
    );
};

export default ToDoItem;
