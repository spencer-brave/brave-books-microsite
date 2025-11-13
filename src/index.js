import React from "react";
import "./Styles/base.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TemplateRouter from "./template-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/:slug" element={<TemplateRouter />} />
    </Routes>
  </Router>
);