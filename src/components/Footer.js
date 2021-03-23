import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <div className="bottom-nav">
        <h4>Site</h4>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <div className="social-links">
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>

      <p>Built on 2021 by Fernando Mendoza</p>
    </footer>
  );
}