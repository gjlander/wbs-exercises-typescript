const ToDoItem = ({ todo }) => {
    return (
        <li className='flex items-center mb-2'>
            <input
                type='checkbox'
                defaultChecked={todo.completed}
                className='mr-2'
            />
            {todo.text}
        </li>
    );
};

export default ToDoItem;
