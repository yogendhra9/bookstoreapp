import React from "react";
import list from "../list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-16 px-4">
        <div>
          <h1 className=" text-xl font-semibold pt-2">Free Books</h1>
          <p className="pt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis non
            incidunt alias, et tenetur maxime atque voluptatibus totam debitis!
            Amet, magni molestiae nobis cumque.
          </p>
        </div>
        <div>
          <div>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
