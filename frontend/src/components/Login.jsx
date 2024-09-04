import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box w-80 ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                }}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5 cursor-pointer "
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>
              {/* Email */}
              <div className=" mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type=" email"
                  placeholder="Enter your email "
                  className="w-[279px] px-3 space-y-1 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 px-[12px]">email required</span>
                )}
              </div>
              {/* Password */}
              {/* </form> */}
              <div className=" mt-4 space-y-2 ">
                <span>Password</span>

                <div className="relative ">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="w-[279px] px-3  space-y-1 rounded-md outline-none "
                    {...register("password", { required: true })}
                  />

                  {errors.password && (
                    <span className="text-red-500 px-[12px] ">
                      password required
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
                <p className="mt-3">
                  Not registerd?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer  "
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
export default Login;
