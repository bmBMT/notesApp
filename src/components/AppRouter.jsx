import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={<route.element type={route.type} />}
        />
      ))}
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
};

export default AppRouter;
