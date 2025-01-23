import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Registration successful!");
    // Add API call logic here
  };

  return (
   <div>
<Header/>
<div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="text-center mb-4">Đăng Ký</h3>
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Tên"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Họ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Họ"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Tên đăng nhập"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" mb-3">
              <div className="">
                <label htmlFor="password" className="form-label">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
             
            </div>

            <div className=" mb-3">
              
              <div className="">
                <label htmlFor="confirmPassword" className="form-label">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                Tôi đồng ý với <a href="/terms">điều khoản và điều kiện</a>
              </label>
            </div>
            {message && <p className="text-danger text-center">{message}</p>}
            <button type="submit" className="btn btn-primary w-100">
              Ghi Danh
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default RegistrationForm;
