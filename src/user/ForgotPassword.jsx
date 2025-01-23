import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Xử lý gửi yêu cầu quên mật khẩu ở đây
    if (emailOrUsername.trim() === "") {
      setMessage("Vui lòng nhập tên đăng nhập hoặc địa chỉ email.");
      return;
    }

    setMessage("Thông tin tạo lại mật khẩu đã được gửi qua email của bạn.");
    setEmailOrUsername("");
  };

  return (
    <div>
 <Header/>
<div className="container ">
       
      <div className="row justify-content-center py-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Quên Mật Khẩu</h3>
              <p>
                Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ
                nhận được thông tin tạo lại mật khẩu qua email của bạn.
              </p>

              {message && (
                <div className="alert alert-info text-center" role="alert">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user_login" className="form-label">
                    Tên đăng nhập hoặc địa chỉ email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_login"
                    name="user_login"
                    placeholder="Nhập tên đăng nhập hoặc email"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Đặt lại mật khẩu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ForgotPassword;
