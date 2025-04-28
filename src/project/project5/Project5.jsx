import React, { useState } from "react";

function Project5() {
  const [add, setAdd] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setAdd([...add, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const mewTask = add.filter((_, i) => i !== index);
    setAdd(mewTask);
  };

  return (
    <div className=" bg-gray-700 h-screen">
      <div className=" flex justify-center items-center py-10 flex-col">
        <p className=" font-bold text-white mb-5">welcome to my todo list</p>

        <div className=" border border-gray-200 rounded-md ">
          <form onSubmit={handleAddTask}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter some things..."
              className=" focus: outline-none px-2 text-gray-100"
            />
            <button
              type="submit"
              className=" bg-blue-500 px-4 py-1 font-bold text-white rounded-r-md hover:bg-blue-700"
            >
              ADD
            </button>
          </form>
        </div>
        {/* map */}

        <hr />

        <div>
          <ul className=" space-y-2">
            {add.map((item, index) => (
              <li className=" flex justify-between " key={index}>
                {item}
                <button
                  onClick={() => handleDelete(index)}
                  className=" bg-red-500 px-2 py-1 "
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project5;
