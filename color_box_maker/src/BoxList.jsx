import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    return (
        <div className="box-list">
            <NewBoxForm />
            <Box />
            <Box />
            <Box />
        </div>
    )
}

export default BoxList;