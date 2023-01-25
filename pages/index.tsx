import CoinTable from "@/components/CoinTable";
import useGetCoinsQuery from "@/services/getCoins";
import { CoinDetails } from "@/services/interface";
import { concatArrayOfArray, switchToUSD } from "@/services/switchToUSD";
import { GetServerSideProps } from "next";
import { useQueryStates, queryTypes } from "next-usequerystate";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const onscroll = (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.2) {
        isFetchingNextPage
          ? console.log("fetching next page")
          : hasNextPage
          ? fetchNextPage()
          : console.log("No more pages");
      }
    };
    document.addEventListener("scroll", onscroll);
    return () => {
      document.removeEventListener("scroll", onscroll);
    };
  }, []);

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
