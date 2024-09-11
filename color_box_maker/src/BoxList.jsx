import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {

        const { color, width, height } = box;

        setBoxes(prevBoxes => [
            { id: uuid(), color, width, height },
            ...prevBoxes
        ]);
    }

    const removeBox = (id) => {
        setBoxes(prevBoxes => prevBoxes.filter((box) => box.id !== id))
    }

    return (
        <div className="box-list">
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box) => (
                    <Box
                        id={box.id}
                        key={box.id}
                        color={box.color}
                        width={box.width | Number}
                        height={box.height | Number}
                        removeBox={removeBox}
                    />
                ))}
            </div>
        </div>
    )
}

export default BoxList;