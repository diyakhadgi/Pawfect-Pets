import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import AboutUs from "../pages/AboutUs";
// import Food from "../pages/section/Food";
// import Accessories from "../pages/section/Accessories";
// import Toys from "../pages/section/Toys";
import AddProducts from "../pages/adminpages/AddProducts";
import Shop from "../pages/Shop";
import Profile from "../pages/Profile";
import SingleProduct from "../pages/SingleProduct";
import AdminLogin from "../pages/adminpages/AdminLogin";
import AdminRegister from "../pages/adminpages/AdminRegister";
import AdminDashboard from "../pages/adminpages/AdminDashboard";
import MyCart from "../pages/MyCart";
import DogForm from "../pages/adminpages/DogForm";
import AdoptionForm from "../pages/Adoption";
import Success from "../pages/payment/Success";
import Cancel from "../pages/payment/Cancel";


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adoption" element={<AdoptionForm />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/food" element={<Food />} /> */}
        {/* <Route path="/accessories" element={<Accessories />} /> */}
        {/* <Route path="/toys" element={<Toys />} /> */}
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productdetails/:id" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/dogForm" element={<DogForm />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>
  );
}
