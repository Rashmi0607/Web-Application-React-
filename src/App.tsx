import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
