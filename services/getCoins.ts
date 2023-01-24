import { useQuery } from 'react-query';
import { CoinDetails, IAPICoin } from './interface';
import axios from "axios"

const getCoins = async (sortBy: string | string[]) => {
    
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortBy}_asc&per_page=100&page=1&sparkline=false`
    try {
        const resp = await axios.get<CoinDetails[]>(url)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetCoinsQuery = (sortBy: string | string[]) => {
    return useQuery(["coins", sortBy],() => getCoins(sortBy))
}

export default useGetCoinsQuery