import React, { useState } from "react";

function Project4() {
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const bgColor =
    color === "blue" ? "text-black bg-blue-400" : " text-white bg-red-500";

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTypeText = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className=" py-20 px-20 flex justify-center  ">
      <div className=" shadow min-w-md p-5 border  border-gray-300 ">
        <h1 className=" text-green-500  mb-5 text-center font-semibold ">
          Welcome to My page
        </h1>

        <div className=" flex flex-col ">
          <p className={`py-10 border px-2 text-center ${bgColor}`}>
            change the bg-color:{color}
          </p>
          <p className=" mb-5">type text in here:{input}</p>
          <p>text count:{count}</p>
          <hr className=" mb-5" />
          <button
            onClick={() => setColor(color === "blue" ? "red" : "blue")}
            className=" mb-2 bg-blue-500 px-5 py-1 hover:bg-blue-700 roudned-lg text-white font-bold"
          >
            change bg-color
          </button>
          <input
            value={input}
            onChange={handleTypeText}
            type="text"
            placeholder="Enter some things... "
            className=" mb-2  border px-2 py-1 rounded-lg border-gray-400"
          />
          <button
            onClick={handleClick}
            className=" mb-2 bg-blue-500 px-5 py-1 hover:bg-blue-700 roudned-lg text-white font-bold"
          >
            Add number
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project4;
