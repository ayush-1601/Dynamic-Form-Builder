import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormPage from "../pages/formPage";
import HomePage from "../pages/home";
import ResponsesPage from "../pages/responsePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/*Route to Home page*/}
        <Route path="/:formID/form" element={<FormPage />} /> {/*Route to Form Page*/}
        <Route path="/:formID/responses" element={<ResponsesPage />} /> {/*Route to responses*/}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
