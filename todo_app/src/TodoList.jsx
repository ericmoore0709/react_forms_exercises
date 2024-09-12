import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        todo.id = uuid();
        setTodos([
            todo,
            ...todos
        ])
    }

    const removeTodo = (id) => {
        setTodos(oldTodos =>
            oldTodos.filter((todo) => todo.id !== id)
        )
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo) => <Todo id={todo.id} key={todo.id} task={todo.task} removeTodo={removeTodo} />)}
        </div>
    )

}

export default TodoList;