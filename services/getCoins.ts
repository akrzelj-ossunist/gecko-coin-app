import { useQuery } from 'react-query';
import { CoinDetails, IAPICoin } from './interface';
import axios from "axios"

const getCoins = async (sortBy: string | string[], num: number | number[], way: string | string[]) => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortBy}_${way}&per_page=${num}&page=1&sparkline=false`
    try {
        const resp = await axios.get<CoinDetails[]>(url)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetCoinsQuery = ({ sortBy, way }:{sortBy: string, way: string}, num: number | number[]) => {
    return useQuery(["coins", sortBy, num, way],() => getCoins(sortBy, num, way))
}

export default useGetCoinsQuery