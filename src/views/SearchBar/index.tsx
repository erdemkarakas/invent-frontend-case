import React from "react";

import Input from "../../components/Input";
import SelectBox from "../../components/SelectBox";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTitle, setType, setYear } from "../../redux/movie/movieSearchSlice";

import "./SearchBar.scss";

const movieType = [
  { value: "movie", label: "Movie" },
  { value: "series", label: "Series" },
  { value: "episode", label: "Episode" },
];

const SearchBar = () => {
  const dispatch = useDispatch();
  const { title, year, type } = useSelector((state: RootState) => state.movie);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setYear(event.target.value));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(event.target.value as "movie" | "series" | "episode"));
  };

  return (
    <div className="search__wrapper">
      <h2>Movie Search</h2>
      <div className="input__wrapper">
        <Input
          placeholder={"Title"}
          value={title}
          onChange={handleTitleChange}
          name={"title"}
        />
        <Input
          placeholder={"Year"}
          value={year}
          onChange={handleYearChange}
          name={"year"}
        />
        <SelectBox
          options={movieType}
          label={"Type:"}
          value={type}
          onChange={handleTypeChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
