import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-10 font-bold text-lg border-b-2 shadow-md py-4">
        <Link to="/">Logo</Link>
        <Link to="/create">Create</Link>
      </nav>
    </>
  );
};

export default Navbar;
