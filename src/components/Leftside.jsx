import TeamComponent from "./TeamComponent";
import Tokenomics from "./Tokenomics";
import Wrapper from "./Wrapper";

const Leftside = () => {
    return <div className="col-span-8">
        <Wrapper>
            <Tokenomics />
        </Wrapper>
        <Wrapper>
        <TeamComponent />
        </Wrapper>
    </div> 
}

export default Leftside;