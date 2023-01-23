import { useQuery } from 'react-query';
import { CoinDetails, IAPICoin } from './interface';
import axios from "axios"

const getCoins = async () => {
    
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    try {
        const resp = await axios.get<IAPICoin>(url)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetCoinsQuery = () => {
    return useQuery(["coins"],() => getCoins())
}

export default useGetCoinsQuery