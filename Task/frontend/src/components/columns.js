import moment from "moment";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableSortBy: true,
  },
  {
    Header: "Title",
    accessor: "title",
    disableSortBy: true,
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "DateCreated",
    accessor: (row) => moment(row.dateCreated).format("HH:mm:ss YY/MM/DD"),
  },
];
