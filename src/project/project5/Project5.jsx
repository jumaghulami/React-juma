import React, { useState } from "react";

function Project5() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handeChange = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const handeChangeClick = (e) => {
    if (e.key === "Enter") {
      alert("khan and tou aslkdf");
    }
  };

  const isLogIn = true;

  const isBackIn = true;

  const hansMessages = true;

  let content;
  if (isAdmin) {
    content = <p>Admin Dashbord</p>;
  } else {
    content = <p>User Dashbord</p>;
  }

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-500 to bg-pink-500">
      <div className=" flex justify-center ">
        <div className=" py-10">
          <form className=" flex flex-col  gap-2 " onSubmit={handeChange}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your email"
              className=" border px-2 py-1"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your email"
              className=" border px-2 py-1"
            />
            <button
              className=" bg-blue-500 px-2 py-1 text-white font-bold hover:blue-700 "
              type="submit"
            >
              Regisster
            </button>
          </form>

          <div className=" mt-10">
            <input
              onKeyDown={handeChangeClick}
              type="text"
              placeholder="Enter some things"
              className=" border px-2 py-1"
            />
          </div>

          {/* the conditionl rendring */}

          <div>{isLogIn ? "Welcome " : "nor come "}</div>
          <div>{isBackIn ? "that are not real " : "by the name of all "}</div>

          <div>
            <p>{hansMessages && <p>You have new messages</p>}</p>
          </div>

          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project5;
