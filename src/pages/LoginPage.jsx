import React, { useState } from "react";
import './LoginPage.css'

import About from '../components/About'
import Login from '../components/Login'




const LoginPage = () => {
  return (
    <div className="login-page-section-container">
      <About/>
      <Login/>
    </div>
  )
};

export default LoginPage;
