import React, { useContext } from "react";
import { MovieContext } from "./MoviesContext";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);
  return (
    <React.Fragment>
      <h1>total movie is {movies && movies.length}</h1>
    </React.Fragment>
  );
};
export default Nav;
