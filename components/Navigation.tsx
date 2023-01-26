import Image from "next/image";
import search from "../public/search.png";
import { useState } from "react";
import useGetCoinByIdQuery from "../services/getCoinById";
import { useDebounce } from "usehooks-ts";
import Link from "next/link";
import rabbit from "../public/rabbit.png";
import login from "../public/login.png";

const Navigation: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [coinValue, setCoinValue] = useState("undefined");
  const [showCoinSearchList, setShowCoinSearchList] = useState(false);
  const debouncedValue = useDebounce<string>(coinValue, 250);
  const { data: coinData, isLoading } = useGetCoinByIdQuery(
    debouncedValue || ""
  );
  return (
    <>
      <div className="flex w-full justify-between bg-blue-500 sticky top-0 items-center">
        <Link
          href="/"
          className="text-white font-extrabold text-3xl ml-6 m-2 flex"
        >
          <Image
            src={rabbit}
            alt="rabbit"
            width={50}
            height={25}
            className="mr-2"
          />
          <p className="mt-2">CoinBunny</p>
        </Link>
        <div className="relative">
          <Image
            src={search}
            alt="search"
            className="w-4 m-4 absolute ml-[215px]"
          />
          <input
            onClick={() => setShowCoinSearchList(true)}
            onChange={(el) => setCoinValue(el.target.value)}
            className="w-[240px] h-8 rounded-md mt-2 pr-8 pl-2"
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
                console.log(coin);
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
        <Link href="/login" className="flex mr-5">
          <Image
            src={login}
            alt="login"
            className="h-[30px] w-[30px] mr-1 mt-2"
          />
          <p className="text-white font-medium text-xl m-2">LogIn</p>
        </Link>
      </div>

      <div onClick={() => setShowCoinSearchList(false)}>{children}</div>
    </>
  );
};

export default Navigation;
