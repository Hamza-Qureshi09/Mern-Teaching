import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  const [imageIndex, setimageIndex] = React.useState(0)
  const Images = ["/images/signin_signup.jpg", "/images/logo.png", "/images/image3.jpg"];

  const leftImage = () => {
    if (imageIndex === 0) {
      setimageIndex(Images.length - 1)
    } else {
      setimageIndex(imageIndex - 1)
    }
  }
  const rightImage = () => {
    let imagesLength = Images.length
    if (imagesLength === imageIndex + 1) {
      setimageIndex(0)
    } else {
      setimageIndex(imageIndex + 1)
    }
  }
  return (
    <div>
      {/* slider */}
      <div className="h-[calc(100vh-230px)] bg-white relative">
        {Images.map((val, index, arr) => {
          if (index === imageIndex) {
            return (
              <div className="h-full w-full relative">
                <img src={val} alt="" className="h-full w-full object-cover" />
              </div>
            );
          }
        })}
        <span onClick={leftImage} className="absolute top-1/2 h-6 w-6 rounded-full bg-gray-200 flex flex-col justify-center items-center cursor-pointer left-4 hover:scale-105 transition-all duration-200"><FaAngleLeft /></span>
        <span onClick={rightImage} className="absolute top-1/2 h-6 w-6 rounded-full bg-gray-200 flex flex-col justify-center items-center cursor-pointer right-4 hover:scale-105 transition-all duration-200"><FaAngleRight /></span>
      </div>
    </div>
  );
};

export default Home;
