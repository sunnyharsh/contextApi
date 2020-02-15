import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MoviesProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry potte",
      price: "$10",
      id: 23124
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MoviesProvider;
