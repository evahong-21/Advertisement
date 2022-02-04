import moment from "moment";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Title",
    accessor: "title",
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
