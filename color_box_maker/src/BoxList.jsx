import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {

        const { color, width, height } = box;

        setBoxes(prevBoxes => {

            const newBoxes =
                [
                    { id: uuid(), color, width, height },
                    ...prevBoxes
                ];

            return newBoxes;

        });
    }

    return (
        <div className="box-list">
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box) => (
                    <Box
                        key={box.id}
                        color={box.color}
                        width={box.width | Number}
                        height={box.height | Number}
                    />
                ))}
            </div>
        </div>
    )
}

export default BoxList;