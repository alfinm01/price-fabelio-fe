import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/submission">Submission</Link>
        </li>
        <li>
          <Link to="/item-list">Item List</Link>
        </li>
        <li>
          <Link to="/detail/1">Detail</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
