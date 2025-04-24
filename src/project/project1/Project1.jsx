import axios from "axios";
import React, { useEffect, useState } from "react";

function Project1() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:3002/users")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => console.log("error not catch", error));
    setLoading(false);
  }, []);

  return (
    <div>
      <div>
        {user.map((item) => (
          <div className=" flex justify-center items-center  gap-6 border-b p-2">
            <p>{item.name}</p>
            <p>{item.email}</p>
            <img
              className=" mb-5 w-10 h-10 rounded-full"
              src={item.images}
              alt="front-developer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project1;
