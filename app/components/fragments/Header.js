import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Newspaper</Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/premium" className="nav-item nav-link">
              Premium post
            </Link>
            <Link to="/premium2" className="nav-item nav-link">
              Premium post 2
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};
