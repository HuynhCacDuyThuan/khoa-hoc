import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MessageManagement = () => {
  const [users] = useState([
    { id: 1, name: "Nguyen Van A", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "Tran Thi B", avatar: "https://via.placeholder.com/40" },
    { id: 3, name: "Admin", avatar: "https://via.placeholder.com/40" },
  ]);

  const [messages, setMessages] = useState({
    1: [
      { sender: "User", text: "Xin chào, tôi cần hỗ trợ.", time: "10:00 AM" },
      { sender: "Admin", text: "Chào bạn! Tôi có thể giúp gì?", time: "10:05 AM" },
    ],
    2: [
      { sender: "User", text: "Tôi có câu hỏi về khóa học.", time: "09:00 AM" },
      { sender: "Admin", text: "Hãy nói rõ hơn nhé.", time: "09:10 AM" },
    ],
    3: [
      { sender: "User", text: "Admin, tôi cần thêm thông tin.", time: "08:30 AM" },
      { sender: "Admin", text: "Được, tôi sẽ hỗ trợ bạn ngay.", time: "08:45 AM" },
    ],
  });

  const [activeUser, setActiveUser] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages({
        ...messages,
        [activeUser]: [
          ...messages[activeUser],
          {
            sender: "User",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ],
      });
      setNewMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý tin nhắn</h3>
      <div className="row">
        {/* Danh sách User */}
        <div className="col-md-3">
          <div className="list-group">
            {users.map((user) => (
              <button
                key={user.id}
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeUser === user.id ? "active" : ""
                }`}
                onClick={() => setActiveUser(user.id)}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <span>{user.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Khu vực Chat */}
        <div className="col-md-9">
          <div className="border rounded shadow-sm p-3 bg-light">
            <h5 className="mb-3">Tin nhắn với {users.find((user) => user.id === activeUser)?.name}</h5>
            <div
              className="overflow-auto mb-3"
              style={{ height: "300px", borderBottom: "1px solid #ddd" }}
            >
              {messages[activeUser]?.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex mb-3 ${
                    message.sender === "Admin" ? "align-items-start" : "justify-content-end align-items-start"
                  }`}
                >
                  {message.sender === "Admin" && (
                    <img
                      src={users.find((u) => u.name === "Admin")?.avatar}
                      alt="Admin"
                      className="rounded-circle me-2"
                      style={{ width: "40px", height: "40px" }}
                    />
                  )}
                  <div
                    className={`p-3 rounded ${
                      message.sender === "Admin" ? "bg-primary text-white" : "bg-secondary text-white"
                    }`}
                    style={{ maxWidth: "70%" }}
                  >
                    <div>{message.text}</div>
                    <div className="small text-end text-light mt-1">{message.time}</div>
                  </div>
                  {message.sender === "User" && (
                    <img
                      src={users[activeUser - 1]?.avatar}
                      alt="User"
                      className="rounded-circle ms-2"
                      style={{ width: "40px", height: "40px" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form nhập tin nhắn */}
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Nhập tin nhắn..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>
                <i className="bi bi-send"></i> Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageManagement;
