import AboutComponent from "./AboutComponent";
import PerformanceComponent from "./PerformanceComponent";
import SentimentComponent from "./SentimentComponent";
import TeamComponent from "./TeamComponent";
import Tokenomics from "./Tokenomics";
import Wrapper from "./Wrapper";

const Leftside = () => {
    return <div className="col-span-8">
        <Wrapper>
            <PerformanceComponent />
        </Wrapper>
        <Wrapper>
            <SentimentComponent />
        </Wrapper>
        <Wrapper>
            <AboutComponent />
        </Wrapper>
        <Wrapper>
            <Tokenomics />
        </Wrapper>
        <Wrapper>
        <TeamComponent />
        </Wrapper>
    </div> 
}

export default Leftside;