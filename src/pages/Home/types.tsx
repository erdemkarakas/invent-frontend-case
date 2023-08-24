export interface ApiParams {
  s?: string;
  y?: string | number | undefined;
  type?: string;
  page?: number;
}
export interface MovieRow {
  name: string | undefined;
  Poster: string | undefined;
  Title: string;
  Year: string;
  imdbID: string;
}
