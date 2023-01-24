import Image from "next/image";
import search from "../public/search.png";
import { useEffect, useState } from "react";
import useGetCoinByNameQuery from "../services/getCoinByName";
import { useDebounce } from "usehooks-ts";
import { CoinDetails } from "@/services/interface";
import Link from "next/link";

const Navigation: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [coinValue, setCoinValue] = useState("undefined");
  const [showCoinSearchList, setShowCoinSearchList] = useState(false);

  const debouncedValue = useDebounce<string>(coinValue, 250);
  const { data: coinData, isLoading } = useGetCoinByNameQuery(
    debouncedValue || "undefined"
  );
  return (
    <>
      <div className="flex w-full justify-between bg-blue-500 sticky top-0">
        <Link href="/" className="text-white font-extrabold text-3xl m-2">
          CoinBunny
        </Link>
        <div onClick={() => setShowCoinSearchList(true)} className="relative">
          <Image
            src={search}
            alt="search"
            className="w-4 m-4 absolute ml-[195px]"
          />
          <input
            onChange={(el) => setCoinValue(el.target.value)}
            className="w-[220px] h-8 rounded-md mt-2 pr-8 pl-2"
          />
          <div
            className={`${
              showCoinSearchList ? "flex" : "hidden"
            } w-full h-4 flex-col sticky mt-1 rounded-md items-center`}
          >
            {isLoading ? (
              <></>
            ) : (
              coinData?.coins.map((coin: CoinDetails) => {
                return (
                  <Link
                    href={`/${coin.id}`}
                    onClick={() => setShowCoinSearchList(false)}
                    className="flex justify-between w-[220px] bg-white p-2 border-[1px] border-gray-300"
                  >
                    <p>{coin.name}</p>
                    <p>{coin.market_cap_rank}</p>
                  </Link>
                );
              })
            )}
          </div>
        </div>
        <p className="text-white font-extrabold text-3xl m-2">CoinBunny</p>
      </div>

      <div onClick={() => setShowCoinSearchList(false)}>{children}</div>
    </>
  );
};

export default Navigation;
