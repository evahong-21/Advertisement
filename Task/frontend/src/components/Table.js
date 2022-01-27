import { Link } from "react-router-dom";
import React from 'react'
import {useTable} from 'react-table';
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
  });
      const [sortedField, setSortedField] = useState(null);
  /*
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */

  return (
    <table class="table table-dark table-hover" {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} >{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell,j) => {
                return <td {...cell.getCellProps()}>
                    <Link to={{pathname:`/detail/${i}`}}
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