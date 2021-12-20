import * as React from "react";
import "./layout.css";
import "../App";
import "./layout.css";
import { Link } from "react-router-dom";

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <div>
      <div className="App-header">
        <header className="App-header">
          <h1>Solution by ANSummers</h1>
        </header>
        <nav>
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              {" "}
              <Link to="/users" className="nav-link-text">
                User Dashboard
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/profile" className="nav-link-text">
                Search Profiles
              </Link>
            </li>
          </ul>
        </nav>

        <title>{pageTitle}</title>
      </div>

      <main>
        <h1 className="heading">{pageHeading}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
