import useGetChartDetailsQuery from "../services/getChartDetails";
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

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale
);

const TableChart: React.FC<{ id: string }> = ({ id }) => {
  const { data: chartData, isLoading } = useGetChartDetailsQuery(id);
  if (isLoading) return <p>Loading...</p>;
  let date: any[] = [];
  const priceData = chartData?.prices.map((price: number[]) => {
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
        data: priceData,
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Line
        data={dataChart}
        options={{
          responsive: true,
          scales: {
            x: {
              ticks: {
                display: false,
              },

              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: { legend: { display: false } },
        }}
      ></Line>
    </>
  );
};

export default TableChart;
