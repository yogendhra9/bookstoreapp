import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./Home/Home";
import Signup from "./components/signup";
import Contactus from "./contactUs/Contactus";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
