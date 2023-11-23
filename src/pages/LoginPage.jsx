import React, { useState } from "react";
import './LoginPage.css'

import About from '../components/About'
import Login from '../components/Login'

import axios from "../api/axios";
import { useEffect } from "react";
import authenticate from "../api/authenticate";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  return (
    <div className="login-page-container">
      <About/>
      <Login/>
    </div>
  )
};

export default LoginPage;