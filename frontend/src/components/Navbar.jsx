import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };
  
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");  // Clear the access token
    navigate("/login");  // Redirect to login page
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Pawfect Pets Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pawfect Pets
            </span>
          </Link>

          {/* Search Box */}
          <div className="relative flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            onClick={toggleMainMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMainMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMainMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/shop" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/adoption" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Adoption
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About Us
                </Link>
              </li>

              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Logout
                  </button>
                </>
              ) : (
                <li>
                  <Link to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Login
                  </Link>
                </li>
              )}

              {/* Cart Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleCartDropdown}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </button>
                {isCartOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      View Cart
                    </Link>
                    <Link to="/checkout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Checkout
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
