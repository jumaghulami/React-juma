import React, { useState } from "react";

function Project4() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className=" py-20 px-20 flex justify-center  ">
      <div className=" shadow min-w-md p-5 border  border-gray-300 ">
        <h1 className=" text-green-500  mb-5 text-center font-semibold ">
          Welcome to My page
        </h1>

        <div></div>
      </div>
    </div>
  );
}

export default Project4;
