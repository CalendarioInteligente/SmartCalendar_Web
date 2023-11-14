import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes as RouterRoutes, Route as RouterRoute } from "react-router-dom"; // Importe Routes e Route

import './App.css'

//import SmartCalendar from "./pages/SmartCalendar";
import LoginPage from "./pages/LoginPage";
import Header from './components/Header';
import CalendarPage from "./pages/CalendarPage";


function App() {
  return (
    <Router>
      <Header/>
      <RouterRoutes>
        <RouterRoute path="/login" element={<LoginPage />} />
        <RouterRoute path="/" element={<CalendarPage />} />
      </RouterRoutes>
    </Router>
  );
}

export default App;
