import React, { useState, useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "./MoviesContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  // console.log(value, "{{{{");
  return (
    <React.Fragment>
      <div>
        {/* <h1> {value}</h1> */}
        {movies.map(obj => (
          <Movie key={obj.id} name={obj.name} price={obj.price} id={obj.id} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default MovieList;
