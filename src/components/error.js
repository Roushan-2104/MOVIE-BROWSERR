import React from "react";
import '../App.css'

export default function error() {
  return (
    <div className='text-center'>
      <img src="https://i.imgur.com/qIufhof.png" alt="..." className='error img-fluid'/>
      <div id="info">
        <h3 className='text-light'>This page could not be found</h3>
      </div>
    </div>
  );
}
