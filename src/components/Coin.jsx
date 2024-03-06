import PriceChange from "./Pricechange";

const Coin = ({ name, symbol, thumb, usd }) => {
    return <div className="flex justify-between">
        <div className="flex gap-1">
            <img className="h-7 w-7 rounded-full" src={thumb} alt="logo-img" />
            <p className="text-lg font-semibold">{name}({symbol})</p>
        </div>
        {usd > 0 ? <PriceChange usd={usd} background={'bg-green-100'} text_color={'text-green-600'}/>
        : <PriceChange usd={usd} background={'bg-red-100'} text_color={'text-red-600'}/>}
    </div>
}

export default Coin;