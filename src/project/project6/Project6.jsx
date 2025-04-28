import React, { useState } from "react";

function Project6() {
  const [add, setAdd] = useState([]);
  const [input, setInput] = useState("");

  const handleAddClick = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setAdd([...add, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const addNew = add.filter((_, i) => i !== index);
    setAdd(addNew);
  };

  return (
    <div className=" h-screen">
      <div className=" text-center ">
        <p>welcome to my six project</p>

        <div className=" ">
          <form onSubmit={handleAddClick} className=" ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter some things..."
              className=" px-2 py-1 border rounded-l-lg "
            />
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-600 rounded-r-lg text-white font-semibold px-4 py-1"
            >
              Add
            </button>
          </form>
          <div className=" ">
            <ul className="">
              {add.map((item, index) => (
                <li key={index} className=" flex justify-center items-center ">
                  <div className=" border flex justify-between items-center min-w-sm mb-2">
                    <span className=" px-2"> {item}</span>
                    <button
                      onClick={() => handleDelete(index)}
                      className=" bg-red-500 hover:bg-red-600 rounded-r-lg text-white font-semibold px-4 py-1"
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project6;
