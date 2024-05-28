import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
