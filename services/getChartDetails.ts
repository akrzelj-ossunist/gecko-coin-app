import axios from "axios";
import { useQuery } from "react-query";


const getChartDetails = async (id: string | string[]) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetChartDetailsQuery = (id: string | string[]) => {
    const { data, isLoading} = useQuery([id], () => getChartDetails(id));
    if(isLoading)
        return {labels: [], dataset:[]}
    let date: any[] = []
    const priceData = data?.prices.map((price: number[]) => {
        const currentTime = new Date(price[0]);
        const dateTime = `${currentTime.getDate()}/${
            currentTime.getMonth() + 1
          }/${currentTime.getFullYear()}`;
          date.push(dateTime);
        return price[1]
    } )
    const dataChart = {
        labels: date,
        datasets: [
          {
            label: "Price-Date",
            data: priceData,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    console.log(dataChart)
  return dataChart
};

export default useGetChartDetailsQuery;