import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setLoading(false);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-16 px-4">
      <div className="mt-32 items-center  justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">
            {" "}
            Here! :
            <span className="hover:transition-transform transform hover:translate-y-2 duration-1000 inline-block cursor-none">
              )
            </span>
          </span>
        </h1>
        <p className="mt-12">
          Welcome to our collection of online courses. Dive into knowledge and
          enhance your skills with our curated books.
        </p>
        <Link to="/">
          <button className=" bg-pink-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-pink-700 duration-700">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Course;
