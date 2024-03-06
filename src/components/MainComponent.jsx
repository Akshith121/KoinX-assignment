import Leftside from "./Leftside";
import Rightside from "./Rightside";

const MainComponent = () => {
    return <div className="px-16 grid grid-cols-12 gap-5">
        <Leftside />
        <Rightside />
    </div>
}

export default MainComponent;