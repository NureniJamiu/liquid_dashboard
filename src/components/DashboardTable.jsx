import { useMemo } from "react";
import mockData from "../mockData";
import { useTable } from "react-table";

import "../styles/DashboardTable.css";

const DashboardTable = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "s/n",
      },
      {
        Header: "APPLICATION ID",
        accessor: "application_id",
      },
      {
        Header: "LOAN AMOUNT",
        accessor: "loan_amount",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "DISBURSED",
        accessor: "disbursed",
      },
      {
        Header: "REPAYMENT",
        accessor: "repayment",
      },
      {
        Header: "APPLICATION DATE",
        accessor: "application_date",
      },
      {
        Header: "ACTIONS",
        accessor: "actions",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="dashboard-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
