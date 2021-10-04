import React from "react";
import "../App.css";
import Hero from "./Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero title="Welcome To Movie Browserr" />
      <div className="container">
        <div className="text-center p-3 mt-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q> You get hurt, hurt ’em back. You get killed… walk it off </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Steve Rogers in{" "}
            <cite title="Avengers" className="text-danger">
              Avengers : Age of Ultron
            </cite>
          </p>
          <Link to="/movies/99861">
            <div className="home-img d-inline-block">
              <img
                src="https://www.sideshow.com/wp/wp-content/uploads/2020/11/cap-740x493.jpg"
                alt="cap."
                className="img-fluid mt-4 rounded"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q> Who Are You In This Vast Multiverse, Mr. Strange? </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Ancient One in{" "}
            <cite title="Avengers" className="text-danger">
              Doctor Strange
            </cite>
          </p>
          <Link to="/movies/284052">
            <div className="home-img d-inline-block">
              <img
                src="https://static2-srcdn-com.cdn.ampproject.org/ii/AW/s/static2.srcdn.com/wordpress/wp-content/uploads/2020/07/doctor-strange-movie-multiverse.jpg?q=50&fit=crop&w=770&h=368&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q>
              {" "}
              If You’re Nothing Without This Suit Then You Shouldn’t Have It.{" "}
            </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Tony Stark in{" "}
            <cite title="Avengers" className="text-danger">
              Spider-Man: Homecoming
            </cite>
          </p>
          <Link to="/movies/315635">
            <div className="home-img d-inline-block">
              <img
                src="https://static2.srcdn.com/wordpress/wp-content/uploads/2018/01/Tony-Stark-Peter-Parker-Spider-Man-Homecoming.jpg?q=50&fit=crop&w=737&h=369&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q>
              {" "}
              People Think In Terms Of Good And Evil When Really Time Is The
              True Enemy Of Us All.{" "}
            </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Kaecilius in{" "}
            <cite title="Avengers" className="text-danger">
              Doctor Strange
            </cite>
          </p>
          <Link to="/movies/284052">
            <div className="home-img d-inline-block">
              <img
                src="https://static0-srcdn-com.cdn.ampproject.org/ii/AW/s/static0.srcdn.com/wordpress/wp-content/uploads/2020/12/pjimage-3-10.jpg?q=50&fit=crop&w=770&h=368&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q> Mr. Stark, It Smells Like A New Car In Here! </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Peter Parker in{" "}
            <cite title="Avengers" className="text-danger">
              Avengers Infinity War
            </cite>
          </p>
          <Link to="/movies/299536">
            <div className="home-img d-inline-block">
              <img
                src="https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Spider-Man-standing-on-the-ship-in-Avengers-Infinity-War-2018.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q> We're In The Endgame Now. </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Doctor Strange in{" "}
            <cite title="Avengers" className="text-danger">
              Avengers Infinity War
            </cite>
          </p>
          <Link to="/movies/299536">
            <div className="home-img d-inline-block">
              <img
                src="https://static2.srcdn.com/wordpress/wp-content/uploads/2018/12/Doctor-Strange-in-Avengers-Infinity-War.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
        <div className="text-center p-3 mt-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-stars text-primary me-4"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <blockquote className="blockquote text-warning fs-2">
            <q>
              {" "}
              Loki, I Thought The World Of You. I Thought We Were Gonna Fight
              Side By Side Forever.{" "}
            </q>
          </blockquote>
          <p className="blockquote-footer fs-4 mt-3 ps-5">
            Thor in{" "}
            <cite title="Avengers" className="text-danger">
              Thor: Ragnarok
            </cite>
          </p>
          <Link to="/movies/284053">
            <div className="home-img d-inline-block">
              <img
                src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/05/Thor-and-Loki-in-elevator-Thor-and-Lokis-Best-Brother-Moments.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5"
                alt="cap."
                className="img-fluid mt-4 rounded home-img"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
