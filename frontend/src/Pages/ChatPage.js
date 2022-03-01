import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, SetChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    SetChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {chats.map((chat) => (
          <h4 key={chat._id}>{chat.chatName}</h4>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
