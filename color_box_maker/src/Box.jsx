import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ color = 'white', width = 50, height = 50 }) => {
    return (
        <div
            className="Box"
            style={{
                backgroundColor: color,
                height: `${height}px`,
                width: `${width}px`
            }} />
    )
}

Box.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Box;