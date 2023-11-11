import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes as RouterRoutes, Route as RouterRoute } from "react-router-dom"; // Importe Routes e Route

import './App.css'

import SmartCalendar from "./SmartCalendar";
import LoginPage from "./pages/LoginPage";
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header/>
      <RouterRoutes>
        <RouterRoute path="/login" element={<LoginPage />} />
        <RouterRoute path="/" element={<SmartCalendar />} />
      </RouterRoutes>
    </Router>
  );
}

export default App;
