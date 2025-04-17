import React, { useEffect, useState } from "react";

const Services = () => {
  const [text, setText] = useState("");
  const fullText = "Hi Imam Juma a Front End Developer ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        index = 0;
        setText("");
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  justify-center h-screen">
      <h1 className="text-3xl font-semibold text-purple-700">{text}</h1>
    </div>
  );
};

export default Services;
