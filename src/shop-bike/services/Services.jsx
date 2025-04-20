import React, { useState } from "react";
import About from "../../aboutUs/About";

const Services = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [contextId, setContextId] = useState(null);

  const handleSend = () => {
    if (text.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: text,
      sender: messages.length % 2 === 0 ? "me" : "you",
      isEditing: false,
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleEdit = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, isEditing: true } : msg))
    );
    setContextId(null);
  };

  const handleEditChange = (id, newText) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, text: newText } : msg))
    );
  };

  const handleEditDone = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, isEditing: false } : msg
      )
    );
  };
  return (
    <>
      <div className="  min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4">
          <div className="h-96 overflow-y-auto space-y-2 mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`relative group p-2 px-4 rounded-2xl max-w-[75%] ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start"
                }`}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextId(msg.id === contextId ? null : msg.id);
                }}
              >
                {msg.isEditing ? (
                  <input
                    value={msg.text}
                    onChange={(e) => handleEditChange(msg.id, e.target.value)}
                    onBlur={() => handleEditDone(msg.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEditDone(msg.id);
                    }}
                    autoFocus
                    className="w-full bg-white text-black p-1 rounded"
                  />
                ) : (
                  msg.text
                )}

                {contextId === msg.id && (
                  <div className="absolute top-full right-0 bg-gray-500 border rounded shadow z-10 mt-1">
                    <button
                      onClick={() => handleEdit(msg.id)}
                      className="block w-full text-left px-4 py-2 hover:bg-purple-400"
                    >
                      Edite
                    </button>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="block w-full text-left px-4 py-2 hover:bg-pink-400 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              type="text"
              placeholder="Write Your Messages..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-gray-500 py-10">
        <About />
      </div>
    </>
  );
};

export default Services;
