import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "./Hero";

export default function Details() {
  const { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=eef0ae062dfda1f5ebdc1dd92ae95aa9&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setisLoading(false);
        }, 1500);
      });
  }, [id]);
  function renderDetails() {
    if (isLoading) {
      return <Hero title="Loading......." />;
    }
    if (movieDetails) {
      const imgurl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      const backdropURL = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
      return (
        <>
          <Hero title={movieDetails.original_title} backdrop={backdropURL} />
          <div className="container my-5 text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={imgurl}
                  className="rounded img-fluid"
                  alt=""
                  onError={(e) => {
                    e.target.src =
                      "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
                  }}
                />
              </div>
              <div className="col-md-8">
                <div>
                  <h1
                    className="display-3 border-bottom border-danger d-inline-block text-info pb-1
          "
                  >
                    {movieDetails.original_title}
                  </h1>

                  <p className="mt-3 blockquote text-warning">
                    <q>
                      <em>{movieDetails.tagline}</em>
                    </q>
                  </p>

                  {movieDetails.overview && (
                    <p className="lead fs-3 mt-4">{movieDetails.overview}</p>
                  )}
                  {movieDetails.homepage && (
                    <a
                      className="btn btn-lg btn-outline-primary mt-3"
                      href={movieDetails.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Want some more details !!
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderDetails();
}
