import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  return(
    <nav>
      <h4>FM</h4>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}