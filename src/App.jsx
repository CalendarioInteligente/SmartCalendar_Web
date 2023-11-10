import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes as RouterRoutes, Route as RouterRoute } from "react-router-dom"; // Importe Routes e Route
import './header.css'

import SmartCalendar from "./SmartCalendar";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <Link to="/">Página Inicial</Link>
          </ul>
          <ul ID="login-btn">
            <Link to="/login">Login</Link>
          </ul>
        </nav>
      </header>

      <RouterRoutes>
        <RouterRoute path="/login" element={<LoginPage />} />
        <RouterRoute path="/" element={<SmartCalendar />} />
      </RouterRoutes>
    </Router>
  );
}

export default App;
