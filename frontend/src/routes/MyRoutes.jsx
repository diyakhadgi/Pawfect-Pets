import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Adoption from "../pages/Adoption";
import AboutUs from "../pages/AboutUs";
import Food from "../pages/section/Food";
import Accessories from "../pages/section/Accessories";
import Toys from "../pages/section/Toys";
import AddProducts from "../pages/adminpages/AddProducts";
import Shop from "../pages/Shop";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/food" element={<Food />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/shop" element={<Shop/>}/>      
        </Routes>
    </BrowserRouter>
  );
}
