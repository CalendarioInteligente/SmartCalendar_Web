import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes as RouterRoutes, Route as RouterRoute } from "react-router-dom"; // Importe Routes e Route

import SmartCalendar from "./SmartCalendar";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <RouterRoutes>
        <RouterRoute path="/login" element={<LoginPage />} />
        <RouterRoute path="/" element={<SmartCalendar />} />
      </RouterRoutes>
    </Router>
  );
}

export default App;
