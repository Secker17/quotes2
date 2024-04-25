import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-evenly' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/sign-up" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link></li>
        <li><Link to="/sign-in" style={{ textDecoration: 'none', color: 'black' }}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;  // Make sure this is a default export
