import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Content({ movies }) {
  const poster_url = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
  const details = `/MOVIE-BROWSERR/movies/${movies.id}`;
  
  return (
    <div>
      <div className="m-3">
        <div className="card card-size mt-4 d-inline-block">
          <img
            src={poster_url}
            className="card-img-top poster"
            onError={(e) => {
              e.target.src =
                "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
            }}
            alt=""
          />

          <div className="card-body">
            <h5 className="card-title">{movies.original_title}</h5>
            <Link to={details} className="btn btn-primary mt-2">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
