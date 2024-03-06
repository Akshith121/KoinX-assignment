
const Coin = ({ name, symbol, thumb, usd }) => {
    return <div className="flex justify-between">
        <div className="flex gap-1">
            <img className="h-7 w-7 rounded-full" src={thumb} alt="logo-img" />
            <p className="text-lg font-semibold">{name}({symbol})</p>
        </div>
        {usd > 0 ? <div className="flex px-1 items-center gap-1 bg-green-100 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            <p className="text-green-600 text-lg font-medium">{usd.toFixed(2)}%</p>
        </div>
        :
        <div className="flex px-1 items-center gap-1 bg-red-100 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <p className="text-red-500 text-lg font-medium">{-usd.toFixed(2)}%</p>
        </div>}
    </div>
}

export default Coin;