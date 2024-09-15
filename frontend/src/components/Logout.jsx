import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out succesfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <>
      <div>
        <button
          className=" px-3 py-4 btn bg-secondary text-black rounded-md hover:bg-primary duration:3400 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
