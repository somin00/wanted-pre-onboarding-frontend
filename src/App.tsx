import Navbar from "components/Navbar";
import Home from "pages/Home";
import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Todo from "pages/Todo";
import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token && pathname === "/todo") {
      navigate("/signin");
    } else if ((token && pathname === "/signup") || (token && pathname === "/signin")) {
      navigate("/todo");
    }
  }, [navigate, pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
