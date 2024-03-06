import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTrendingCoins = () => {

    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        async function getTrengingCoins() {
           const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
           const json = res.data;
           setTrendingCoins(json.coins);
        }
        getTrengingCoins();
     }, []);

    return trendingCoins;
}