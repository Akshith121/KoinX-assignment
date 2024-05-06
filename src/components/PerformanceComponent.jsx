import Range from "./Range";
import Info from "./Info";
import Table from "./Table";

const PerformanceComponent = () => {
    return <div className="flex flex-col gap-4">
        <p className="font-semibold text-3xl">Performance</p>
        <Range text1="Todays's Low" price1={"85785"} text2="Todays's High" price2={"85785"}/>
        <Range text1="52W Low" price1={"85785"} text2="52W High" price2="67587"/>
        <Info text='Fundamentals' />
        <div className="flex gap-20">
            <Table />
            <Table />
        </div>
    </div>
}

export default PerformanceComponent;