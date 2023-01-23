import CoinTable from "@/components/CoinTable";
import Navigation from "@/components/Navigation";
import useGetCoinsQuery from "@/services/getCoins";
import { CoinDetails } from "@/services/interface";

const switchToUSD = (price: string): string => {
  let fixedPrice = price;
  let rest = "";
  if (price.indexOf(".") >= 0) {
    rest = price.substring(price.indexOf("."), price.length);
    fixedPrice = price.substring(0, price.indexOf("."));
  }
  fixedPrice = fixedPrice.split("").reverse().join("");
  fixedPrice = fixedPrice.replace(/.{3}/g, "$&,");
  fixedPrice = fixedPrice.split("").reverse().join("");
  if (fixedPrice[0] === ",")
    fixedPrice = fixedPrice.substring(1, fixedPrice.length);
  return fixedPrice + rest;
};

export default function Home() {
  const { data: coinData, isLoading } = useGetCoinsQuery();
  const coinTableData = coinData?.map((coin: CoinDetails) => {
    const priceChangePercentage24H =
      Math.round(coin.price_change_percentage_24h * 100) / 100 + "%";
    const currentPrice = switchToUSD(String(coin.current_price)) + " $";
    const marketCap = switchToUSD(String(coin.market_cap)) + " $";
    return {
      col1: coin.market_cap_rank,
      col2: coin.name,
      col3: currentPrice,
      col4: priceChangePercentage24H,
      col5: marketCap,
      col6: "graph",
      col7: coin.id,
    };
  });
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <CoinTable coinTableData={coinTableData} />
    </>
  );
}
