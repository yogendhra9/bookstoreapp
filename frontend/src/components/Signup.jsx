import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error:" + " " + err.response.data.message);
        }
      });
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <div className="border-2 border-gray-600 shadow-gray-950 shadow-xl ring-offset-slate-50 p-5 rounded-md ">
          <div className="box w-70">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                <Link to="/"> ✕ </Link>
              </button>
              <h3 className="font-bold text-lg text-center">Signup</h3>
              <div className=" mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname "
                  className="w-80 px-3 space-y-1 rounded-md outline-none"
                  {...register("fullName", { required: true })}
                />
                <br />
                {errors.fullName && (
                  <span className="text-red-500 px-[12px]">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className=" mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type=" email"
                  placeholder="Enter your email "
                  className="w-80 px-3 space-y-1 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500 px-[12px]">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className=" mt-4 space-y-2 ">
                <span>Password</span>
                <br />
                <div className="relative ">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="w-80 px-3  space-y-1 rounded-md outline-none "
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-red-500 px-[12px]">
                      This field is required
                    </span>
                  )}
                  <button
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1 "
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <div className="flex justify-around mt-6">
                <button className="btn btn-secondary hover:bg-pink-700 duration-300">
                  Submit
                </button>
                <p className=" ml-2 mt-3 text-l">
                  Already have an acc?
                  <button
                    className="underline text-blue-500 cursor-pointer "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
