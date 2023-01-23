import Link from "next/link";
import { useMemo } from "react";
import { useTable } from "react-table";
import { Doughnut } from "react-chartjs-2";

interface CoinTableData {
  col1: number;
  col2: string;
  col3: string;
  col4: string;
  col5: number;
  col6: string;
}

const CoinTable: React.FC<{ coinTableData: CoinTableData }> = ({
  coinTableData,
}) => {
  const data = useMemo(() => coinTableData, []);

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
    useTable({ columns, data });
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
                      {column.render("Header")}
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
                      className={`p-4 ${
                        cell.column.Header === "24H" && cell.value[0] !== "-"
                          ? "text-green-500"
                          : cell.value[0] === "-" && "text-red-500"
                      }`}
                    >
                      {cell.column.Header === "COIN" ? (
                        <Link href={`/${cell.row.original.col7}`}>
                          {cell.render("Cell")}
                        </Link>
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
