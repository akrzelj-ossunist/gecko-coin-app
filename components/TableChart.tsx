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

const TableChart: React.FC<{ id: string; status: string }> = ({
  id,
  status,
}) => {
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

  const lineColor = status[0] === "-" ? "red" : "green";
  const dataChart = {
    labels: date,
    datasets: [
      {
        data: priceData,
        borderColor: lineColor,
      },
    ],
  };

  return (
    <>
      <Line
        data={dataChart}
        options={{
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
