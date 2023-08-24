/* eslint-disable react-hooks/exhaustive-deps */
import api from "../../api/axios";
import Navbar from "../../views/Header";

import "./home.scss";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ApiParams, MovieRow } from "./types";
import { columns } from "./constants";
import SearchBar from "../../views/SearchBar";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { title, year, type } = useSelector((state: RootState) => state.movie);
  const getMovies = async (params?: ApiParams) => {
    setLoading(true);
    params = {
      s: title,
      y: year,
      type: type,
      page: currentPage,
    };
    try {
      const response = await api.get("/", {
        params,
      });
      setMovieData(response.data.Search);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToMovie = (row: MovieRow) => {
    navigate(`/movies/${row.imdbID}`);
  };

  useEffect(() => {
    getMovies();
  }, [title, year, type, currentPage]);

  return (
    <>
      <Navbar />
      <div className="content__wrapper">
        <SearchBar />
        <div className="content__table">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <DataTable
              title="Movies"
              defaultSortFieldId={1}
              onRowClicked={navigateToMovie}
              onChangePage={(page) => setCurrentPage(page)}
              columns={columns}
              data={movieData}
              progressPending={loading}
              highlightOnHover
              pagination
              pointerOnHover={true}
              paginationServer
              paginationComponentOptions={{
                noRowsPerPage: true,
              }}
              paginationPerPage={9}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
