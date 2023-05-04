import React from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/style.css";

const App = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

export default App;
