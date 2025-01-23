import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Sử dụng điều hướng React Router
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const LoginForm = () => {
  const navigate = useNavigate();

  // Dữ liệu người dùng mẫu
  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
    { username: "teachers", password: "teachers", role: "teacher" },
  ];

  // State
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
  
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );
  
    if (user) {
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
  
      // Điều hướng theo vai trò
      if (user.role === "admin" || user.role === "teacher") {
    

        navigate("/admin");
        window.location.reload();
      } else if (user.role === "user") {
       

        navigate("/profile");
        window.location.reload();
      }
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };
  

  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h3 className="text-center mb-4">Xin chào, Chào mừng trở lại!</h3>
          <form onSubmit={handleLogin}>
            {/* Tên đăng nhập / Email */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tên đăng nhập"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mật khẩu */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Lỗi */}
            {error && <div className="text-danger mb-3">{error}</div>}

            {/* Nút đăng nhập */}
            <button type="submit" className="btn btn-primary w-100">
              Đăng nhập
            </button>

            {/* Đăng ký */}
            <div className="text-center mt-3">
              <span>Chưa có tài khoản?&nbsp;</span>
              <a
                href="/registration"
                className="text-primary text-decoration-none"
              >
                Đăng Ký Ngay
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
