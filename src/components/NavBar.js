import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar-end">
        <div className="navbar-item">
          <Link to="/">Home</Link>
          <Link to="/trips/create">Create</Link>
          <Link to="/trips/:id/edit">Edit</Link>
          <Link to="/trips">All Trips</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
