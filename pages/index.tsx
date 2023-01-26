import CoinTable from "@/components/CoinTable";
import useGetCoinsQuery from "@/services/getCoins";
import { concatArrayOfArray, switchToUSD } from "@/services/switchToUSD";
import { GetServerSideProps } from "next";
import { useQueryStates, queryTypes } from "next-usequerystate";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

const Home: React.FC<{ sortBy: string; way: string }> = ({
  sortBy: initialSort,
  way: initialWay,
}) => {
  const [params, setParams] = useQueryStates(
    {
      sortBy: queryTypes.string.withDefault(initialSort),
      way: queryTypes.string.withDefault(initialWay),
    },
    { history: "replace" }
  );
  const {
    data: coinData,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCoinsQuery(params);

  const coinTableData = coinData?.pages.map((page) => {
    return page?.map((coin) => {
      const priceChangePercentage24H =
        Math.round(coin.price_change_percentage_24h * 100) / 100 + "%";
      const currentPrice = switchToUSD(String(coin.current_price)) + " $";
      const marketCap = switchToUSD(String(coin.market_cap)) + " $";
      return {
        col1: coin.market_cap_rank || 0,
        col2: coin.name,
        col3: currentPrice,
        col4: priceChangePercentage24H || "0",
        col5: marketCap,
        col6: coin.id,
        image: coin.image
      };
    });
  });
  if (isLoading) return <p>Loading...</p>;
  const connectedPages = concatArrayOfArray(coinTableData!);
  return (
    <div>
      <CoinTable
        coinTableData={connectedPages!}
        setParams={setParams}
        params={params}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = {
    sortBy: context.query.sortBy || "",
    way: context.query.way || "desc",
  };
  return {
    props: { params },
  };
};
