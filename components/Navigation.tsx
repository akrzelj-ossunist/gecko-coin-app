import Image from "next/image";

import { useEffect, useState } from "react";
import useGetCoinByIdQuery from "../services/getCoinById";
import { useDebounce } from "usehooks-ts";
import Link from "next/link";
import rabbit from "../public/rabbit.png";
import login from "../public/login.png";
import { useQuery } from "react-query";
import axios from "axios";
import SearchBar from "./SearchBar";

const Navigation: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [coinValue, setCoinValue] = useState("undefined");
  const [showCoinSearchList, setShowCoinSearchList] = useState(false);
  const debouncedValue = useDebounce<string>(coinValue, 250);
  const { data: coinData, isLoading } = useGetCoinByIdQuery(
    debouncedValue || ""
  );

  const route200 = async () => {
    try {
      const resp = await axios.get("/api/login");
      return resp.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: routeData, isLoading: Loading } = useQuery([], () =>
    route200()
  );
  if (Loading) return <p>Loading...</p>;
  return (
    <>
      <div className="flex w-full justify-between bg-blue-500 sticky top-0 items-center tablet:z-50">
        <Link
          href="/"
          className="text-white font-extrabold text-3xl ml-6 m-2 flex phone:text-2xl"
        >
          <Image
            src={rabbit}
            alt="rabbit"
            width={50}
            height={25}
            className="mr-2 phone:w-10"
          />
          <p className="mt-2">CoinBunny</p>
        </Link>
        <SearchBar
          className="tablet:hidden"
          setShowCoinSearchList={setShowCoinSearchList}
          setCoinValue={setCoinValue}
          showCoinSearchList={showCoinSearchList}
          isLoading={isLoading}
          coinData={coinData}
        />
        <Link href="/login" className="flex mr-5">
          <Image
            src={login}
            alt="login"
            className="h-[30px] w-[30px] mr-1 mt-2"
          />
          {routeData.length > 0 ? (
            <p className="text-white font-medium text-xl m-2">
              {routeData[routeData.length - 1].username}
            </p>
          ) : (
            <p className="text-white font-medium text-xl m-2">LogIn</p>
          )}
        </Link>
      </div>

      <div onClick={() => setShowCoinSearchList(false)}>
        <SearchBar
          className="desktop:hidden w-full flex justify-center mt-4"
          setShowCoinSearchList={setShowCoinSearchList}
          setCoinValue={setCoinValue}
          showCoinSearchList={showCoinSearchList}
          isLoading={isLoading}
          coinData={coinData}
        />
        {children}
      </div>
    </>
  );
};

export default Navigation;
