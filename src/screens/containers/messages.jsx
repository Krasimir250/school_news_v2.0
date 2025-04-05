import React, { useState } from "react";
import { GoRead, GoUnread } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";

function Messages() {
  const initialMessages = [
    {
      id: 1,
      sender: "Петър Петров",
      message: "Новината ви не е побликувана!",
      timestamp: "07.07.2024 10:00",
      read: false,
    },
    {
      id: 2,
      sender: "Красимир Кабаков",
      message: "Новината ви е побликувана!",
      timestamp: "07.07.2024 10:01",
      read: false,
    },
    {
      id: 3,
      sender: "Мария Илиева",
      message: "Внимание!",
      timestamp: "07.07.2024 10:02",
      read: false,
    },
    {
      id: 4,
      sender: "Петър Петров",
      message: "Новината ви не е побликувана!",
      timestamp: "07.07.2024 10:03",
      read: false,
    },
    {
      id: 5,
      sender: "Красимир Кабаков",
      message: "Новината ви е побликувана!",
      timestamp: "07.07.2024 10:04",
      read: false,
    },
    {
      id: 6,
      sender: "Мария Илиева",
      message: "Внимание!",
      timestamp: "07.07.2024 10:05",
      read: false,
    },
    {
      id: 7,
      sender: "Красимир Кабаков",
      message: "Новината ви е побликувана!",
      timestamp: "07.07.2024 10:06",
      read: false,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const markAsRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  const removeMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <>
      <div className="container">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">От</th>
              <th className="py-2 px-4 border-b">Заглавие</th>
              <th className="py-2 px-4 border-b">Дата/Час</th>
              <th className="py-2 px-4 border-b">Функции</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className={
                  message.read
                    ? "hover:bg-gray-200 cursor-pointer"
                    : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
                }
              >
                <td className="py-2 px-4 border-b text-center">
                  {message.sender}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {message.message}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {message.timestamp}
                </td>
                <td className="py-2 px-4 border-b text-center space-x-2">
                  <button
                    onClick={() => markAsRead(message.id)}
                    className=" bg-blue-500 text-white px-2 py-1 rounded"
                    disabled={message.read}
                  >
                    {message.read ? (
                      <GoRead size={20} />
                    ) : (
                      <GoUnread size={20} />
                    )}
                  </button>
                  <button
                    onClick={() => removeMessage(message.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Messages;
