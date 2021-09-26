import React from "react";
import { Link,useHistory } from "react-router-dom";
import '../App.css'

export default function Navbar({setSearchText}) {
  const history = useHistory();
  const updateSearch = (e)=>{
    history.push('/search')
    setSearchText(e.target.value)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/MOVIE-BROWSERR">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/MOVIE-BROWSERR">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link DISABLED" to="/MOVIE-BROWSERR">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trend">
                  Trending
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="me-2 form-control"
                placeholder="Search For Movies"
                onChange={updateSearch}
              />
              <button className='btn btn-outline-danger' type='search'>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
