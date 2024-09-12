import PropTypes from 'prop-types';

const Todo = ({ id, task, removeTodo }) => {

    const handleClick = (e) => {
        const todo = e.target.parentNode;
        removeTodo(todo.id);
    }

    return (
        <div id={id}>
            {task}
            <button onClick={handleClick}>X</button>
        </div>
    )
}

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default Todo;