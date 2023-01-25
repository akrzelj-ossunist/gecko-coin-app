import { useQuery } from 'react-query';
import { CoinDetails, IAPICoin } from './interface';
import axios from "axios"

const getCoins = async (sortBy: string | string[], num: number | number[]) => {
    
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortBy}_asc&per_page=20&page=1&sparkline=false`
    try {
        const resp = await axios.get<CoinDetails[]>(url)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetCoinsQuery = (sortBy: string | string[], num: number | number[]) => {
    return useQuery(["coins", sortBy, num],() => getCoins(sortBy, num))
}

export default useGetCoinsQuery