import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const getAccessToken = localStorage.getItem("accessToken");

  if (!getAccessToken) {
    return <Navigate to="/" />;
  }

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div>This is your profile</div>
      <button class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full" onClick={onLogout}>Logout</button>
    </>
  )
}

export default Profile