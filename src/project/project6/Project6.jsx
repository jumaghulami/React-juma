import React, { useState } from "react";

function Project6() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const age = e.target.value;
    setInput((khan) => ({ ...khan, [name]: age }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
  };

  return (
    <div className=" h-screen flex justify-center py-12">
      <div>Welcome to my Page:::</div>

      <div className=" border min-w-lg p-5   ">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col  justify-center items-center "
        >
          <input
            name="userName"
            value={input.userName || ""}
            onChange={handleChange}
            type="text"
            placeholder="Enter your useName"
            className="border px-2 mb-5"
          />
          <input
            name="age"
            value={input.age || ""}
            onChange={handleChange}
            type="number"
            placeholder="Enter your Age"
            className="border px-2 mb-5"
          />
          <button
            className=" px-5 py-1  bg-blue-500 rounded-lg text-white font-semibold"
            type="submit"
          >
            Rigesster
          </button>
        </form>
      </div>
    </div>
  );
}

export default Project6;
