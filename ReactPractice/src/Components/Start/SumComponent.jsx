import FunctionComponent from "./FunctionComponent";
import { otherComponent } from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import Person from "./Person";

function SumComponent() {
    return (
        <>
            <FunctionComponent />
            <ClassComponent />
            <Person />
        </>
    )
}

export default SumComponent;