import axios from "axios";
import { useQuery } from "react-query";

const getPeriodChartDetails = async (id: string | string[], from: string | string[], to: string | string[]) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetPeriodChartDetailsQuery = (id: string | string[], from: string | string[], to: string | string[]) => {
    return useQuery([id,from], () => getPeriodChartDetails(id, from, to));

};

export default useGetPeriodChartDetailsQuery;

