import useGetPeriodChartDetailsQuery from "@/services/getPeriodChartDetails";
import { useRouter } from "next/router";
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
import Image from "next/image";
import { GetServerSideProps } from "next";
import { useQueryState, queryTypes } from "next-usequerystate";
import { switchToUSD } from "@/services/customFunctions";
import { useState } from "react";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale
);

const CoinId: React.FC<{ timeNow: number }> = ({ timeNow: timeNow }) => {
  const router = useRouter();
  const { name } = router.query;
  const [timeFrom, setTimeFrom] = useQueryState(
    "time",
    queryTypes.string.withDefault(String(timeNow - 86400))
  );
  const { data: coin, isLoading } = useGetCoinQuery(name || "");
  const { data: chartData, isLoading: Loading } = useGetPeriodChartDetailsQuery(
    name || "",
    timeFrom || "",
    String(timeNow)
  );
  const [activeButton, setActiveButton] = useState("1");
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

  const dataWidthLength =
    String(
      Math.floor(
        (100 * coin?.market_data.low_24h.usd) / coin?.market_data.high_24h.usd
      )
    ) + "%";

  return (
    <div className="flex mt-10 flex-col items-center h-[100vh] tablet:mt-4">
      <div className="flex w-[70%] justify-between mb-4 tablet:flex-col tablet:w-full tablet:items-center">
        <div className="p-4 w-[50%] tablet:w-full">
          <p className="m-2 text-sm font-bold text-gray-400">
            Rank:#{coin?.market_cap_rank}
          </p>
          <div className="flex m-2">
            <Image
              src={coin?.image.large}
              alt={coin?.id}
              width={30}
              height={30}
            />
            <p className="font-bold ml-2 pt-[5px]">{coin?.name}</p>
          </div>
          <div className="flex m-2">
            <p className="font-bold text-3xl">{coin?.tickers[0].last}$</p>
            <p
              className={`${
                String(
                  coin?.market_data.market_cap_change_percentage_24h
                )[0] === "-"
                  ? "bg-red-500"
                  : "bg-green-500"
              } text-white pt-[6px] ml-2 px-4 rounded-md`}
            >
              {Math.round(
                coin?.market_data.market_cap_change_percentage_24h * 100
              ) / 100}
              %
            </p>
          </div>
          <div className="flex ml-2 tablet:w-full">
            <p className="text-sm font-bold">{coin?.market_data.low_24h.usd}</p>
            <div
              className={`w-[40%] mx-2 mt-[6px] h-[10px] relative bg-gray-500 overflow-hidden rounded-md`}
            >
              <div
                style={{ width: dataWidthLength }}
                className="absolute h-[6px] m-[2px] rounded-md bg-white"
              ></div>
            </div>
            <p className="text-sm font-bold">
              {coin?.market_data.high_24h.usd}
            </p>
          </div>
        </div>
        <div className="w-[50%] border-2 p-4 border-blue-500 tablet:w-full tablet:border-none">
          <div className="flex justify-between m-3 border-b-[1px] border-gray-300 text-sm p-1">
            <p>Market cap:</p>
            <p>{switchToUSD(String(coin?.market_data.market_cap.usd))}$</p>
          </div>
          <div className="flex justify-between m-2 border-b-[1px] border-gray-300 text-sm p-1">
            <p>Total volume:</p>
            <p>{switchToUSD(String(coin?.market_data.total_volume.usd))}$</p>
          </div>
          <div className="flex justify-between m-2 border-b-[1px] border-gray-300 text-sm p-1">
            <p>Circulating Supply:</p>
            <p>{coin?.market_data.circulating_supply}</p>
          </div>
          <div className="flex justify-between m-2 border-b-[1px] border-gray-300 text-sm p-1">
            <p>Max Supply:</p>
            <p>{coin?.market_data.max_supply || "0"}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[70%] h-72 tablet:w-full tablet:p-4">
        <div className="flex justify-between tablet:flex-col">
          <p className="font-extrabold text-3xl">Price:</p>
          <div className="border-[1px] border-gray-400 h-[26px] mt-2 rounded-md shadow-md tablet:mb-6 tablet:w-[301px]">
            <button
              value="1"
              onClick={() => {
                setActiveButton("1");
                setTimeFrom(String(timeNow - 86400));
              }}
              className={`border-r-[1px] border-gray-400 px-4 font-semibold rounded-l-md ${
                activeButton === "1" && "bg-gray-300"
              }`}
            >
              1
            </button>
            <button
              value="7"
              onClick={() => {
                setActiveButton("7");
                setTimeFrom(String(timeNow - 604800));
              }}
              className={`border-r-[1px] border-gray-400 px-4 font-semibold ${
                activeButton === "7" && "bg-gray-300"
              }`}
            >
              7
            </button>
            <button
              value="30"
              onClick={() => {
                setActiveButton("30");
                setTimeFrom(String(timeNow - 2592000));
              }}
              className={`border-r-[1px] border-gray-400 px-4 font-semibold ${
                activeButton === "30" && "bg-gray-300"
              }`}
            >
              30
            </button>
            <button
              value="90"
              onClick={() => {
                setActiveButton("90");
                setTimeFrom(String(timeNow - 7776000));
              }}
              className={`border-r-[1px] border-gray-400 px-4 font-semibold ${
                activeButton === "90" && "bg-gray-300"
              }`}
            >
              90
            </button>
            <button
              value="180"
              onClick={() => {
                setActiveButton("180");
                setTimeFrom(String(timeNow - 15552000));
              }}
              className={`border-r-[1px] border-gray-400 px-4 font-semibold ${
                activeButton === "180" && "bg-gray-300"
              }`}
            >
              180
            </button>
            <button
              value="365"
              onClick={() => {
                setActiveButton("365");
                setTimeFrom(String(timeNow - 31536000));
              }}
              className={`px-4 font-semibold rounded-r-md ${
                activeButton === "365" && "bg-gray-300"
              }`}
            >
              365
            </button>
          </div>
        </div>
        <div>
          {Loading ? <p>Loading...</p> : <Line data={dataChart}></Line>}
        </div>
      </div>
    </div>
  );
};

export default CoinId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const timeNow =
    context.query.timeNow || Math.round(new Date().getTime() / 1000);
  return {
    props: { timeNow: timeNow },
  };
};
