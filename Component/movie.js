import React from "react";

const Movie = ({ name, price }) => {
  return (
    <React.Fragment>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </React.Fragment>
  );
};
export default Movie;
