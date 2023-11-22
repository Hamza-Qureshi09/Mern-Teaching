import React from "react";

const Home = () => {
  const Images = ["/images/signin_signup.jpg", "/images/logo.png"];

  return (
    <div>
      {/* slider */}
      <div>
        slider
        {Images.map((val, index, arr) => {
          return (
            <div>
              {/* <img src={val} alt="" /> */}
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
