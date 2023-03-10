import axios from "axios";
import { useQuery } from "react-query";

const getCoinById = async (name: string | string[]) => {
  const url = `https://api.coingecko.com/api/v3/search?query=${name}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetCoinByIdQuery = (name: string | string[]) => {
  return useQuery(["coin", name], () => getCoinById(name));
};

export default useGetCoinByIdQuery;