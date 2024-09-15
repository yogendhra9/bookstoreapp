import React from "react";


function Cards({ item }) {
  return (
    <>
      <div className=" mt-4 my-3 p-3 ">
        <div className="card w-92  bg-base-200 shadow-xl hover:scale-105 duration-200 overflow-clip">
          <figure>
            <img src="i2.jpg" alt="bookImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-primary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline ">₹{item.price}</div>
              <div className=" cursor-pointer  badge badge-outline hover: hover:bg-pink-500  text-white p-3 duration-300 ">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
