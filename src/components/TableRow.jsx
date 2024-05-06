import Rule from "./Rule";

const TableRow = ({ left, right }) => {
    return <div className="flex flex-col">
        <div className="flex justify-between">
            <p>{left}</p>
            <p>{right}</p>
        </div>
        <Rule />
    </div>
}

export default TableRow;