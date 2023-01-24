import useGetPeriodChartDetailsQuery from "@/services/getPeriodChartDetails";
import { useRouter } from "next/router";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";
import useGetCoinQuery from "../services/getCoin";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale
);

const CoinId: React.FC = () => {
  const router = useRouter();
  const timeNow = Math.round(new Date().getTime() / 1000);
  const { name } = router.query;
  const [timeFrom, setTimeFrom] = useState(String(timeNow - 86400));
  const { data: coin, isLoading } = useGetCoinQuery(name || "");
  const { data: chartData, isLoading: Loading } = useGetPeriodChartDetailsQuery(
    name || "",
    timeFrom,
    String(timeNow)
  );
  if (Loading) return <p>Loading...</p>;
  if (isLoading) return <p>Loading...</p>;

  let date: any[] = [];
  const price = chartData?.prices.map((price: any) => {
    const currentTime = new Date(price[0]);
    const dateTime = `${currentTime.getDate()}/${
      currentTime.getMonth() + 1
    }/${currentTime.getFullYear()}`;
    date.push(dateTime);
    return price[1];
  });

  const dataChart = {
    labels: date,
    datasets: [
      {
        label: "Price-Date",
        data: price,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="flex w-[70%] justify-between">
        <div>
          <p>Rank:#{coin?.market_cap_rank}</p>
          <p>{coin?.name}</p>
          <p>Price: {coin?.tickers[0].last}$</p>
          <p>{coin?.market_data.market_cap_change_percentage_24h}%</p>
        </div>
        <div>
          <p>Market cap: {coin?.market_data.market_cap.usd}</p>
          <p>Circulating Supply: {coin?.market_data.circulating_supply}</p>
          <p>Max Supply: {coin?.market_data.max_supply || "0"}</p>
        </div>
      </div>
      <div className="flex flex-col w-[70%] h-72">
        <div className="flex justify-between">
          <p className="font-extrabold text-3xl">Price:</p>
          <div className="border-[1px] border-gray-400 h-[26px] mt-2">
            <button
              onClick={() => setTimeFrom(String(timeNow - 86400))}
              className="border-r-[1px] border-gray-400 px-4 font-semibold"
            >
              1
            </button>
            <button
              onClick={() => setTimeFrom(String(timeNow - 604800))}
              className="border-r-[1px] border-gray-400 px-4 font-semibold"
            >
              7
            </button>
            <button
              onClick={() => setTimeFrom(String(timeNow - 2592000))}
              className="border-r-[1px] border-gray-400 px-4 font-semibold"
            >
              30
            </button>
            <button
              onClick={() => setTimeFrom(String(timeNow - 7776000))}
              className="border-r-[1px] border-gray-400 px-4 font-semibold"
            >
              90
            </button>
            <button
              onClick={() => setTimeFrom(String(timeNow - 15552000))}
              className="border-r-[1px] border-gray-400 px-4 font-semibold"
            >
              180
            </button>
            <button
              onClick={() => setTimeFrom(String(timeNow - 31536000))}
              className="px-4 font-semibold"
            >
              365
            </button>
          </div>
        </div>
        <div>
          <Line data={dataChart}></Line>
        </div>
      </div>
    </div>
  );
};

export default CoinId;
