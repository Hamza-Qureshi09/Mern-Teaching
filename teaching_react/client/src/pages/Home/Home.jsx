import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  const [imageIndex, setimageIndex] = React.useState(0);
  const [count, setcount] = useState(0);
  const [fetchedTodos, setfetchedTodos] = React.useState([]);
  const Images = [
    "/images/signin_signup.jpg",
    "/images/logo.png",
    "/images/image3.jpg",
  ];

  const leftImage = () => {
    if (imageIndex === 0) {
      setimageIndex(Images.length - 1);
    } else {
      setimageIndex(imageIndex - 1);
    }
  };
  const rightImage = () => {
    let imagesLength = Images.length;
    if (imagesLength === imageIndex + 1) {
      setimageIndex(0);
    } else {
      setimageIndex(imageIndex + 1);
    }
  };

  // side effect => useEffect
  React.useEffect(() => {
    const fetchTodos = async () => {
      const createTodo = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            userId: 201,
            id: 201,
            title: "testing jsonplaceholder",
            body: "this is dummy body",
          }),
        }
      );
      console.log(await createTodo.json());
    };

    // fetchTodos();
  }, []);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  React.useEffect(() => {
    const fetchTodos = async () => {
      const fetchtodo = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(await fetchtodo.json());
    };

    // fetchTodos();
  }, [count]);

  return (
    <div>
      {/* slider */}
      <div className="h-[calc(100vh-230px)] bg-white relative">
        {Images.map((val, index, arr) => {
          if (index === imageIndex) {
            return (
              <div className="h-full w-full relative z-10">
                <img
                  src={val}
                  alt=""
                  className={`h-full w-full object-cover imageAnimation transition-all duration-200 delay-150`}
                />
              </div>
            );
          }
        })}
        <span
          onClick={leftImage}
          className="absolute top-1/2 h-6 w-6 rounded-full bg-gray-200 flex flex-col justify-center items-center cursor-pointer left-4 hover:scale-105 transition-all duration-200 z-10"
        >
          <FaAngleLeft />
        </span>
        <span
          onClick={rightImage}
          className="absolute top-1/2 h-6 w-6 rounded-full bg-gray-200 flex flex-col justify-center items-center cursor-pointer right-4 hover:scale-105 transition-all duration-200 z-10"
        >
          <FaAngleRight />
        </span>
      </div>
      {count}
      {/* button */}
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Home;
