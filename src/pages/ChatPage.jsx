import React, { useState } from "react";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: "Joseph's Store", lastMessage: "Order confirmed!" },
    { id: 2, name: "Praise Collections", lastMessage: "New stock available." },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className={`p-2 cursor-pointer rounded-lg ${
                selectedChat === chat.id ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-400">{chat.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="topbar p-4 shadow-md bg-gray-800 text-white">
          {selectedChat
            ? chats.find((chat) => chat.id === selectedChat)?.name
            : "Select a chat"}
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 bg-gray-100">
          {selectedChat ? (
            <div className="h-full flex items-center justify-center text-gray-500">
              Messages will appear here
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              No chat selected
            </div>
          )}
        </div>

        {/* Input Box */}
        {selectedChat && (
          <div className="p-4 bg-white border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-lg">
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
