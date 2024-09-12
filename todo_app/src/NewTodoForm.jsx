import { useState } from "react";
import PropTypes from 'prop-types';

const NewTodoForm = ({ addTodo }) => {

    const INITIAL_DATA = {
        task: ''
    };

    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_DATA);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="task">Task</label>
                <input id="task" name="task" placeholder="Task..." value={formData.task} onChange={handleChange} />
            </div>
            <button>Add</button>
        </form>
    )
}

NewTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default NewTodoForm;