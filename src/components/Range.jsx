import CostDetails from "./CostDetails";

const Range = ({text1, price1, text2, price2}) => {
    return <div className="flex justify-between gap-6 items-center">
    <CostDetails text={text1} price={price1}/>
    <div className="h-1.5 w-96 bg-gradient-to-r from-tomato to-palegreen rounded-md">

    </div>
    <CostDetails text={text2} price={price2}/>
 </div>
}

export default Range;