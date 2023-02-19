import search from "../public/search.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const SearchBar: React.FC<{
  setShowCoinSearchList: (val: boolean) => void;
  setCoinValue: (val: string) => void;
  showCoinSearchList: boolean;
  isLoading: boolean;
  coinData: any;
  className?: string;
}> = ({
  setShowCoinSearchList,
  setCoinValue,
  showCoinSearchList,
  isLoading,
  coinData,
  className: classValues,
}) => {
  const router = useRouter();
  return (
    <div
      className={`relative ${classValues} ${
        router.pathname === "/login" ? "hidden" : ""
      } ${router.pathname === "/register" ? "hidden" : ""}`}
    >
      <Image
        src={search}
        alt="search"
        className="w-4 m-4 absolute ml-[215px]"
      />
      <input
        onClick={() => setShowCoinSearchList(true)}
        onChange={(el) => setCoinValue(el.target.value)}
        placeholder="Bitcoin"
        className="w-[240px] h-8 rounded-md mt-2 pr-8 pl-2 tablet:border-[1px] tablet:border-gray-400"
      />
      <div
        className={`${
          showCoinSearchList ? "flex" : "hidden"
        } w-full h-[200px] flex-col rounded-md items-center overflow-y-auto absolute`}
      >
        {isLoading ? (
          <></>
        ) : (
          coinData?.coins.map((coin: any) => {
            return (
              <Link
                onClick={() => setShowCoinSearchList(false)}
                href={`/${coin.id}`}
                className="flex justify-between w-[230px] bg-white p-2 border-[1px] border-gray-300"
              >
                <div className="flex">
                  <Image
                    src={coin.thumb}
                    alt="coinImage"
                    className="mr-2"
                    width={25}
                    height={10}
                  />
                  <p>{coin.name}</p>
                </div>
                <p>{coin.market_cap_rank}</p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBar;
