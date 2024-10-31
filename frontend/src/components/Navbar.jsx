import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const toggleMainMenu = () => setIsMainMenuOpen(!isMainMenuOpen);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const authToken = localStorage.getItem("accessToken");
      const response = await axios.get("http://localhost:8000/cart/getcart", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      return response.data;
    },
    enabled: !!isLoggedIn,
  });

  const cartItemCount = cartData?.cart?.items?.reduce(
    (count, item) => count + item.quantity, 0
  ) || 0;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Pawfect Pets Logo" />
          <span className="text-2xl font-semibold dark:text-white">Pawfect Pets</span>
        </Link>

        {/* Search Box */}
        <div className="relative mx-4 flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Menu Toggle for Mobile */}
        <button
          onClick={toggleMainMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Main Menu */}
        <div className={`${isMainMenuOpen ? "block" : "hidden"} md:flex items-center space-x-6`}>
          <Link to="/shop" className="text-gray-900 hover:text-blue-700 dark:text-white">Shop</Link>
          <Link to="/adoption" className="text-gray-900 hover:text-blue-700 dark:text-white">Adoption</Link>
          <Link to="/aboutUs" className="text-gray-900 hover:text-blue-700 dark:text-white">About Us</Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-gray-900 hover:text-blue-700 dark:text-white">Profile</Link>
              <button onClick={handleLogout} className="text-gray-900 hover:text-blue-700 dark:text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-gray-900 hover:text-blue-700 dark:text-white">Login</Link>
          )}
          
          {/* Cart Icon */}
          <div className="relative">
            <IconButton onClick={toggleCartDropdown} aria-label="cart">
              <StyledBadge badgeContent={cartItemCount} color="secondary">
                <ShoppingCartIcon sx={{ color: 'white' }} />
              </StyledBadge>
            </IconButton>
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                {cartData?.cart?.items.length > 0 ? (
                  cartData.cart.items.map((item) => (
                    <div key={item.productId} className="p-2 border-b dark:border-gray-600">
                      <p>{item.itemName}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  ))
                ) : (
                  <p className="p-4 text-center dark:text-white">Cart is empty</p>
                )}
                <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">View Cart</Link>
                <Link to="/checkout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Checkout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
