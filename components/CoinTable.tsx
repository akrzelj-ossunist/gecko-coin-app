import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import { useIntersectionObserver } from "usehooks-ts";

interface CoinTableData {
  col1: number;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
}

const CoinTable: React.FC<{
  coinTableData: CoinTableData[];
  setParams: ({ sortBy, way }: any) => void;
  params: { sortBy: string; way: string };
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}> = ({
  coinTableData,
  setParams,
  params,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) => {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  console.log(entry);

  const data = useMemo(() => coinTableData, [coinTableData]);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "col1",
      },

      {
        Header: "COIN",
        accessor: "col2",
      },
      {
        Header: "PRICE",
        accessor: "col3",
      },
      {
        Header: "24H",
        accessor: "col4",
      },
      {
        Header: "MARKET CAP",
        accessor: "col5",
      },
      {
        Header: "7D",
        accessor: "col6",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data as any });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) fetchNextPage();
  }, [entry?.isIntersecting]);

  return (
    <div className="flex w-full justify-center">
      <table {...getTableBodyProps()} className="w-[80%] shadow-lg mt-10">
        <thead className="bg-gray-200 font-bold text-gray-500 text-lg">
          {headerGroups.map((headerGroup: any) => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="border-[1px] border-gray-300"
              >
                {headerGroup.headers.map((column: any) => {
                  return (
                    <td {...column.getHeaderProps()} className="pl-[4%] p-4">
                      <button
                        onClick={() => {
                          setParams({
                            sortBy: column.id == "col2" ? "id" : "market_cap",
                            way: params.way === "asc" ? "desc" : "asc",
                          });
                        }}
                        type="button"
                      >
                        {column.render("Header")}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);

            return (
              <tr
                ref={rows.length - 1 === index ? ref : null}
                {...row.getRowProps()}
                className="border-[1px] border-gray-300"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`pl-[4%] py-[10px] font-medium text-lg ${
                        cell.column.Header === "24H" && cell.value[0] !== "-"
                          ? "text-green-500"
                          : cell.value[0] === "-" && "text-red-500"
                      }`}
                    >
                      {cell.column.Header === "COIN" ? (
                        <Link
                          className="flex"
                          href={`/${cell.row.original.col6}`}
                        >
                          <Image
                            src={String(cell.row.original.image)}
                            alt="coinImage"
                            width={25}
                            height={10}
                            className="mr-3"
                          />
                          {cell.render("Cell")}
                        </Link>
                      ) : cell.column.Header === "7D" ? (
                        <div className="w-[50%] h-[25%]">
                          {/* <TableChart
                            id={String(cell.row.original.col6)}
                            status={String(cell.row.original.col4)}
                          /> */}
                        </div>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isFetchingNextPage && (
        <div className="fixed bottom-0 w-[100vw] h-[80px] text-3xl items-center font-bold first-letter bg-blue-500 text-white flex justify-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CoinTable;
