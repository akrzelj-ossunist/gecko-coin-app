import axios from "axios";
import { useQuery } from "react-query";

const getCoin = async (name: string | string[]) => {
  const url = `https://api.coingecko.com/api/v3/coins/${name}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetCoinQuery = (name: string | string[]) => {
  return useQuery(["coin", name], () => getCoin(name));
};

export default useGetCoinQuery;
