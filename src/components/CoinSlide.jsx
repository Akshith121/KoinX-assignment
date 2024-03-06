import { useTrendingCoins } from "../hooks/useTrendingCoins";
import CoinDetails from "./CoinDetails";
import Slider from "react-slick";

const CoinSlide = ({text}) => {

    const trendingCoins = useTrendingCoins();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        horizontalSwiping: true,
        nextArrow: <NextArrow /> ,
        prevArrow: <PrevArrow />
    };

    return <div className="flex flex-col gap-6 mb-6">
    <p className="text-2xl font-bold">{text}</p>
    <Slider {...settings}>
        {trendingCoins.map((coin, ind) => (
            (!coin.item.data.price.startsWith("$0.0<sub")) && <CoinDetails thumb={coin.item.thumb} symbol={coin.item.symbol} usd={parseFloat(coin.item.data.price_change_percentage_24h.usd)} price={coin.item.data.price} plot={coin.item.data.sparkline} />
        ))}
    </Slider>
</div>
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={`flex justify-center items-center border rounded-full self-center h-7 w-7 ${className}`} onClick={onClick} style={{display: 'block'}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    </div>
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={`flex justify-center items-center border rounded-full self-center h-7 w-7 ${className}`} onClick={onClick} style={{display: 'block'}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
</div>
}

export default CoinSlide;