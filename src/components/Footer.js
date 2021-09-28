import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-light mt-5">
        <div className="d-lg-flex d-block justify-content-lg-between text-center">
          <div className="ms-lg-5 ps-lg-5 fs-5">
            <p>&copy; 2021 Geeks. All Rights Reserved.</p>
          </div>
          <div className="me-lg-5 pe-lg-5 d-lg-block d-none">
            <p className="d-inline-block ms-2">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </p>
            <p className="d-inline-block ms-2">
              <Link to="/" className="text-decoration-none disabled">
                About us
              </Link>
            </p>
            <p className="d-inline-block ms-2">
              <Link to="/trend" className="text-decoration-none">
                Trending
              </Link>
            </p>
            <p className="d-inline-block ms-2">
              <Link to="/search" className="text-decoration-none">
                Search
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
