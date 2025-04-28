import React, { useState } from "react";

function Project5() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-500 to bg-pink-500">
      <div className=" flex justify-center ">
        <div className=" py-10">
          <form className=" flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className=" border  px-2 py-1 rounded-lgs"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className=" border  px-2 py-1 rounded-lgs"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project5;
