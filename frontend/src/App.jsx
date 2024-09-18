import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./Home/Home";
import Signup from "./components/Signup";
import Contactus from "./contactUs/Contactus";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (authUser != null) {
      setLoading(false);
    }
  }, [authUser]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/course"
            element={
              authUser ? (
                <Courses />
              ) : authUser === null ? (
                <div> Fetching user...</div>
              ) : (
                <Navigate to="/signup" />
              )
            }
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
