import React, { useState, useEffect, useRef } from "react";

function Project2() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // پاک‌سازی تایمر
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">⏱️ تایمر: {seconds} ثانیه</h1>
      <div className="space-x-2">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          شروع
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          توقف
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          ریست
        </button>
      </div>
    </div>
  );
}

export default Project2;
