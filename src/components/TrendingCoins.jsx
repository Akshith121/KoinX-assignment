import { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import Wrapper from './Wrapper';

const TrendingCoins = () => {

   const [trendingCoins, setTrendingCoins] = useState([]);

   useEffect(() => {
      async function getTrengingCoins() {
         const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
         const json = res.data;
         setTrendingCoins(json.coins);
      }
      getTrengingCoins();
   }, []);

   return <Wrapper>
      <div className='flex flex-col gap-6'>
         <p className='text-2xl font-semibold'>Trending Coins (24h)</p>
         {trendingCoins.map((coin, ind) => (
            (ind < 3) && <Coin key={coin.item.coin_id} name={coin.item.name} symbol={coin.item.symbol} thumb={coin.item.thumb} usd={parseFloat(coin.item.data.price_change_percentage_24h.usd)} />
         ))}
      </div>
   </Wrapper>
}

export default TrendingCoins;