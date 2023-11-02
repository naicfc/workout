import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-white fixed w-full ">
      <div className="my-0 mx-auto py-5 px-8 flex items-center justify-between">
        <Link to="/" className="text-gray-800">
          <h1 className="font-extrabold text-lg">Workout Buddy</h1>
        </Link>
        <nav className="flex gap-4">
          {user && (
            <div className="flex gap-3">
              <span>{user.email}</span>
              <button
                onClick={handleClick}
                className="px-3 py-1 border rounded border-emerald-500">
                Logout
              </button>
            </div>
          )}
          {!user && (
            <div className="flex gap-2">
              <Link to="/login" className="px-3 py-1">
                Login
              </Link>
              <Link to="/signup" className="px-3 py-1">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
