import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Ims from "./Component/Ims";
import Forget from "./Component/Forget";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ContextProvider from "./context/ContextProvider";
import AdminS from "./Component/AdminS";
import Fillup from "./Component/Fillup";
import Profile from "./Component/Profile";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/ims" element={<Ims />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminS" element={<AdminS />} />
          <Route path="/fillup" element={<Fillup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
