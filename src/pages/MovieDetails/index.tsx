import { useState, useEffect } from "react";
import { ApiParams, Movie } from "./types";
import { useParams } from "react-router-dom";
import api from "../../api/client";
import "./MoviesDetails.scss";
import Navbar from "../../views/Header";
import { Rating } from "react-simple-star-rating";
import LoadingSpinner from "../../components/LoadingSpinner";

const MovieDetails: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const param = useParams();

  const getMovies = async (params?: ApiParams) => {
    setLoading(true);
    params = {
      i: param.movieId,
    };
    try {
      const response = await api.get("/", {
        params,
      });
      setMovieData(response.data);
      setLoading(false);
      console.log(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="movie-container">
        <div className="movie-poster">
          <img src={movieData?.Poster} alt={movieData?.Title} />
        </div>
        <div className="movie-details">
          <h1>{movieData?.Title}</h1>
          <Rating
            initialValue={Math.round(Number(movieData?.imdbRating))}
            iconsCount={10}
          />
          <p>
            <b>Year:</b> {movieData?.Year}
          </p>
          <p>
            <b>Runtime:</b> {movieData?.Runtime}
          </p>
          <p>
            <b>Genre:</b> {movieData?.Genre}
          </p>
          <p>
            <b>Director:</b> {movieData?.Director}
          </p>
          <p>
            <b>Actors:</b> {movieData?.Actors}
          </p>
          <p>
            <b>Plot:</b> {movieData?.Plot}
          </p>
          <p>
            <b className="imdb_text">IMDB Rating:</b> {movieData?.imdbRating}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
