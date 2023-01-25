import Link from "next/link";
import { useMemo } from "react";
import { useTable } from "react-table";
import TableChart from "./TableChart";

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
  setSortBy: (val: string) => void;
}> = ({ coinTableData, setSortBy }) => {
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
  return (
    <div className="flex w-full justify-center">
      <table {...getTableBodyProps()} className="w-[80%] shadow-lg mt-10">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup: any) => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="border-[1px] border-gray-300"
              >
                {headerGroup.headers.map((column: any) => {
                  return (
                    <td {...column.getHeaderProps()} className="p-4">
                      <button
                        onClick={() => {
                          setSortBy(column.id);
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
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className="border-[1px] border-gray-300"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`pl-4 ${
                        cell.column.Header === "24H" && cell.value[0] !== "-"
                          ? "text-green-500"
                          : cell.value[0] === "-" && "text-red-500"
                      }`}
                    >
                      {cell.column.Header === "COIN" ? (
                        <Link href={`/${cell.row.original.col6}`}>
                          {cell.render("Cell")}
                        </Link>
                      ) : cell.column.Header === "7D" ? (
                        <div className="w-[70%] h-[80%]">
                          {/* <TableChart id={String(cell.row.original.col6)} /> */}
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
    </div>
  );
};

export default CoinTable;
