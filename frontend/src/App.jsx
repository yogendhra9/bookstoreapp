import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./Home/Home";
import Signup from "./components/Signup";
import Contactus from "./contactUs/Contactus";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              authUser ? (
                <div>
                  {console.log(authUser)}
                  <h1>Courses page</h1>
                  <Courses />
                </div>
              ) : (
                <Navigate to="/signup" />
              )
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
