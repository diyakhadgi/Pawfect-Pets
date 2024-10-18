import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

export default function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}