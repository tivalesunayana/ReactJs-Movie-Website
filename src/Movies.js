import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  console.log(movie);
  if (isLoading) {
    return (
      <div className="">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((curElement) => {
          const { Poster, Title, imdbID } = curElement;
          const movieName = Title.substring(0, 15);
          return (
            <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieName.length >= 15 ? `${movieName}...` : movieName}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
