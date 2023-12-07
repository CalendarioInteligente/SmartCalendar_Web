import {React, useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate} from "react-router-dom";
import { Routes as RouterRoutes, Route as RouterRoute } from "react-router-dom"; // Importe Routes e Route

import './App.css'

//import SmartCalendar from "./pages/SmartCalendar";
import LoginPage from "./pages/LoginPage";
import Header from './components/Header';
import SmartCalendar from "./pages/SmartCalendar";
import authenticate from "./api/authenticate";


function App() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    async function fetchData() {
        setAutenticado(await authenticate());
    };
    fetchData();
  }, [])

  return (
    <Router>
      <Header autenticado={autenticado} setAutenticado={setAutenticado}/>
      <RouterRoutes>
        <RouterRoute path="/login" element={<LoginPage autenticado={autenticado} setAutenticado={setAutenticado}/>} />
        <RouterRoute path="/" element={<SmartCalendar autenticado={autenticado} setAutenticado={setAutenticado}/>} />
      </RouterRoutes>
    </Router>
  );
}

export default App;
