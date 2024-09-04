import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" flex h-screen justify-center items-center">
        <div className="border-2 border-gray-600 shadow-gray-950 shadow-xl ring-offset-slate-50 p-5 rounded-md ">
          <div className="box w-70">
            <form method="dialog " onSubmit={handleSubmit(onSubmit)}>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                <Link to="/"> ✕ </Link>
              </button>
              <h2 className="font-bold text-2xl text-center">Contact Us</h2>
              <div className=" mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name "
                  className="w-80 px-3 space-y-2 rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500 px-[12px]">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-3 space-y-2">

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

              <div className="mt-3 space-y-2">
                Message
                <br />
                <textarea
                  placeholder="Type your message"
                  className="w-80 px-3   space-y-1 rounded-md outline-none"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-red-500 px-[12px]">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-6">
                <button className="btn btn-secondary hover:bg-pink-700 duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
