
const CoinDetails = ({ thumb, symbol, usd, price, plot }) => {
    return <div className="flex flex-col border rounded-lg px-4 py-4 gap-2">
        <div className="flex gap-2">
            <img className="h-7 w-7 rounded-full" src={thumb} alt="logo-img" />
            <div className="flex">
                <p className="text-lg font-semibold">{symbol}</p>
                {usd > 0 ? <div className="flex items-center bg-green-100 text-green-600 text-sm rounded-sm">
                    {usd.toFixed(2)}%
                </div>
                    : <div className="flex items-center bg-red-100 text-red-600 text-sm rounded-sm">
                        {usd.toFixed(2)}%
                    </div>}
            </div>
        </div>
        <p className="text-2xl font-semibold">{price}</p>
        <div className="flex justify-center my-2">
            <img className="h-14 w-48" src={plot} alt="price change plot" />
        </div>
    </div>
}

export default CoinDetails;