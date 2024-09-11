import { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = () => {

    const INITIAL_DATA = {
        color: '#ffffff',
        width: 50,
        height: 50
    }

    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange = (evt) => {

        const { name, value } = evt.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="BoxForm" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="color">Color</label>
                <input
                    id="color"
                    name="color"
                    type="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div className="input-container">
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    type="number"
                    min={10}
                    max={300}
                    placeholder="Width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div className="input-container">
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    type="number"
                    min={10}
                    max={300}
                    placeholder="Height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;