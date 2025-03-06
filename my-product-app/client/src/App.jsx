import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewUsers from "./pages/ViewUsers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}></Route>
      <Route path="/viewusers" element={<ViewUsers/>}></Route>
      <Route path="*" element={<h1>404 Error Page</h1>}></Route>
    </Routes>
  );
};

export default App;
