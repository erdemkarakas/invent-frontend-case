import { MovieRow } from "./types";
import { TableColumn } from "react-data-table-component";

export const columns: TableColumn<MovieRow>[] = [
  {
    name: "Poster",
    grow: 0,
    cell: (row: { name: string | undefined; Poster: string | undefined }) => (
      <img height="84px" width="56px" alt={row.name} src={row.Poster} />
    ),
  },
  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.Year,
    sortable: true,
  },
  {
    name: "Imdb ID",
    //upper case
    selector: (row) => row.imdbID.toUpperCase(),
    sortable: true,
  },
];
