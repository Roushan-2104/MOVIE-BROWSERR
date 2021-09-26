import React from "react";
import Hero from "./Hero";
import "../App.css";

export default function Trending() {
  return (
    <div>
      <Hero title="Trending" />
      <div className="text-center">
        <div className="card card-size mt-4 d-inline-block">
          <img
            src="https://images.alphacoders.com/117/thumb-1920-1171603.jpg"
            className="card-img-top poster"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Shang Chi</h5>
            <p className="card-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            </p>
            <a href="/" className="btn btn-primary disabled">
              Nothing HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
