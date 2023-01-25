import { useInfiniteQuery, useQuery } from 'react-query';
import { CoinDetails, IAPICoin } from './interface';
import axios from "axios"

const getCoins = async (sortBy: string | string[], way: string | string[], pageParam: number | number[]) => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortBy}_${way}&per_page=20&page=${pageParam}&sparkline=false`
    try {
        const resp = await axios.get<CoinDetails[]>(url)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetCoinsQuery = ({ sortBy, way }:{sortBy: string, way: string}) => {
    return useInfiniteQuery(["coins", sortBy, way],({ pageParam = 1 }) => getCoins(sortBy, way, pageParam), {getNextPageParam: (lastPage, pages) => {
        const endPage = 125
        const nextPage = pages?.length + 1
        return nextPage <= endPage! ? nextPage : undefined
    }})
}

export default useGetCoinsQuery