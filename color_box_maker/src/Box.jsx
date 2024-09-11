import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ id, color = 'white', width = 50, height = 50, removeBox }) => {

    const handleClick = (e) => {
        const id = e.target.parentNode.id;
        removeBox(id);
    }

    return (
        <div
            id={id}
            className="Box"
            style={{
                backgroundColor: color,
                height: `${height}px`,
                width: `${width}px`
            }}>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

Box.propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    removeBox: PropTypes.func.isRequired
}

export default Box;