import { useRouter } from "next/router";
import useGetCoinQuery from "../services/getCoin";

const CoinId: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data: coin, isLoading } = useGetCoinQuery(name || "");
  if (isLoading) return <p>Loading...</p>;
  console.log(coin);

  return <></>;
};

export default CoinId;
