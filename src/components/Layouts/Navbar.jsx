import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLogedIn = localStorage.getItem("email") && localStorage.getItem("password");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("left-full");
    setIsMenuOpen(isMenuOpen);
  };

  const handleMenuClose = () => {
    const menu = document.getElementById("menu");
    menu.classList.add("left-full");
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center bg-black/50 border-b border-white/20 backdrop-blur-sm text-white px-8 md:px-16 fixed top-0 z-50">
      <h2 className="font-bold text-lg">Shoezis</h2>
      <button onClick={handleMenu} className="sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path>
        </svg>
      </button>
      <div
        id="menu"
        className={`flex transition-all duration-300 ease-in-out max-sm:flex-col max-sm:w-full max-sm:min-h-screen max-sm:fixed max-sm:bg-black max-sm:py-10 max-sm:top-16 gap-4 items-center ${!isMenuOpen ? "left-full left-0" : ""}`}
      >
        <Link onClick={handleMenuClose} to="/">
          Home
        </Link>
        <Link onClick={handleMenuClose} to="/products">
          Products
        </Link>
        {isLogedIn ? (
          <>
            <p>{email}</p>

            <Button style={`text-sm shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)] max-sm:w-[90vw]`} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button style={`text-sm shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)] max-sm:w-[90vw]`} onClick={handleMenuClose}>
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
