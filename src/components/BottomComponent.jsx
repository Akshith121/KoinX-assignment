import CoinSlide from "./CoinSlide";

const BottomComponent = () => {

    return <div className="bg-white py-16 px-16">
       <CoinSlide text={'You May Also Like'}/>
       <CoinSlide text={'Trending Coins'}/>
    </div>
}

export default BottomComponent;