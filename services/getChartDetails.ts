import axios from "axios";
import { useQuery } from "react-query";

const getChartDetails = async (id: string | string[]) => {
  return [{prices: {}}]
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetChartDetailsQuery = (id: string | string[]) => {
    return useQuery([id], () => getChartDetails(id));
};

export default useGetChartDetailsQuery;