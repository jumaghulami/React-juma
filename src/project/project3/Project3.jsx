import React, { useState } from "react";

function Project3() {
  const [add, setAdd] = useState([]);
  const [input, setInput] = useState("");

  const todoList = () => {
    if (task.trim() === "") return;
    setAdd([...add, input]);
    setInput("");
  };

  return (
    <div className=" h-screen">
      <div className=" flex justify-center items-center py-20  ">
        <div className=" border min-w-md p-5 ">
          <p className=" text-center font-bold border-b">Todo list 😍😍</p>
          <div className=" mt-5 border flex  ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter Some Things...."
              className=" focus:outline-none  w-full px-2  "
            />
            <button
              onClick={todoList}
              className=" bg-blue-600 px-5 py-1 text-white font-bold hover:bg-blue-700 "
            >
              Add
            </button>
          </div>
          <div>
            <ul>
              {add.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
