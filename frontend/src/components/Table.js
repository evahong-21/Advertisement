import { Link } from "react-router-dom";
import React from "react";
import { useTable } from "react-table";
import "./Table.css";
// const API_URL = process.env.REACT_APP_API_URL || '/api'

export default function Table({ columns, data }) {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows,
  } = useTable(
    {
      columns,
      data,
    },
  );

  return (
    <>
      <table className="table table-dark table-hover" {...getTableProps()}>
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
            // console.log(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    <Link
                      to={{ pathname: `/detail/${cell.row.original.id}` }}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {cell.render("Cell")}
                    </Link>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  );
}
