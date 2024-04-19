import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-200 font-semibold">Оцінка ситуації</Link>
        </li>
        <li>
          <Link to="/evacuation" className="text-white hover:text-gray-200 font-semibold">Планування евакуації</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
