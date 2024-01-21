import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

const Dashboard = React.lazy(() => import("./assets/components/Dashboard.jsx"));
const Landing = React.lazy(() => import("./assets/components/Landing.jsx"));

function App() {
  return <div>
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => navigate("/")}>landing</button>
    <button onClick={() => navigate("/dashboard")}>dashboard</button>
  </div>
}

export default App
