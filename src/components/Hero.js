import React from "react";
import "../App.css";


export default function Hero(props) {
  return (
    <header className="text-center bg p-4 position-relative hero-contains ">
      <h1 className="display-4 fw-bold text-light d-inline-block">
        {props.title}
      </h1>
      {props.backdrop &&
      <div className='backdrop' style={{backgroundImage:`url(${props.backdrop})`}}>
        </div>
      }
      
    </header>
  );
}
