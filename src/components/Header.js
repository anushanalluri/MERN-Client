import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Task Manager</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li>
            <Link to="/todolist" className="hover:text-gray-300">To-Do List</Link>
          </li>
          <li>
            <Link to="/taskmanager" className="hover:text-gray-300">Task Manager</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
