import React from "react";
import "../App.css";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero title="Welcome To Movie Browserr" />
      <div className="text-center p-3 m-4">
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
        <img
          src="https://www.sideshow.com/wp/wp-content/uploads/2020/11/cap-740x493.jpg"
          alt="cap."
          className="img-fluid mt-4 rounded"
        />
      </div>
    </div>
  );
}
