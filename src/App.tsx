import Navbar from "components/Navbar";
import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Todo from "pages/Todo";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
