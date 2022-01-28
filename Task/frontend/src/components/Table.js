import { Link } from "react-router-dom";
import React from 'react'
import {useTable, useSortBy} from 'react-table';
import {useState} from 'react';

export default function Table({columns, data}) {
      const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)

  } = useTable({
    columns,
    data
  },
          useSortBy
  );
      // const [sortedField, setSortedField] = useState(null);
    const firstPageRows = rows.slice(0, 10)
  return (
    <table class="table table-dark table-hover" {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                  {column.render("Header")}
                <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? '⇂'
                            : '↾'
                        : ''}
                </span>
              </th>
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
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>
                    <Link to={{pathname:`/detail/${cell.row.original.id}`}}
                          style={{ color:'white', textDecoration: 'none' }}>
                        {cell.render("Cell")}</Link></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}