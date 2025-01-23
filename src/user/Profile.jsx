import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CoursesTab from "../Component/CoursesTab";
import Wishlist from "../Component/Wishlist";
import OrderHistory from "../Component/OrderHistory";
import Settings from "../Component/Settings";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile"); // Trạng thái mặc định là tab 'Thông tin tài khoản'
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleLogout = () => {
    // Xóa thông tin người dùng trong localStorage
    localStorage.removeItem("loggedInUser");
  
    // Điều hướng về trang đăng nhập
    navigate("/login");
  };
  
  return (
    <div>
      <Header/>
      <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          {/* Avatar */}
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
            style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}
          >
            TH
          </div>
          {/* User Info */}
          <div className="ms-3">
            <h5 className="mb-0">Xin chào,</h5>
            <h4 className="fw-bold">Thuần Huỳnh</h4>
          </div>
        </div>
        {/* Notification Icon */}
        <button className="btn btn-light position-relative">
          <i className="bi bi-bell"></i>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.75rem" }}
          >
            3
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 mb-4">
          <ul className="list-group">
            <li
              className={`list-group-item ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => handleTabChange("profile")}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-person me-2"></i>
              Thông tin tài khoản
            </li>
            <li
              className={`list-group-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => handleTabChange("settings")}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-gear me-2"></i>
              Cài đặt
            </li>

            <li
  className={`list-group-item ${activeTab === "courses" ? "active" : ""}`}
  onClick={() => handleTabChange("courses")}
>
  <i className="bi bi-card-checklist me-2"></i>
  Các khóa học của bạn
</li>

<li
  className={`list-group-item ${activeTab === "wishlist" ? "active" : ""}`}
  onClick={() => handleTabChange("wishlist")}
>
  <i className="bi bi-bookmark-heart me-2"></i>
  Danh sách yêu thích
</li>


            <li className="list-group-item">
              <i className="bi bi-star me-2"></i>
              Đánh giá
            </li>
            <li className="list-group-item">
              <i className="bi bi-journal-check me-2"></i>
              Các bài kiểm tra
            </li>
            <li
  className={`list-group-item ${activeTab === "orderHistory" ? "active" : ""}`}
  onClick={() => handleTabChange("orderHistory")}
>
  <i className="bi bi-clock-history me-2"></i>
  Lịch sử đơn hàng
</li>

            <li className="list-group-item">
              <i className="bi bi-question-circle me-2"></i>
              Hỏi & Đáp
            </li>
           
            <li
  className="list-group-item"
  onClick={() => handleLogout()}
>
  <i className="bi bi-box-arrow-right me-2"></i>
  Đăng xuất
</li>

          </ul>
        </div>

        {/* Main Section */}
        <div className="col-lg-9">
          {activeTab === "profile" && (
            <div>
              <div className="alert alert-primary d-flex justify-content-between align-items-center">
                <div>
                  <i className="bi bi-info-circle me-2"></i>
                  Đặt ảnh hồ sơ của bạn
                </div>
                <a
                  href="#"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleTabChange("settings")}
                >
                  Bấm vào đây
                </a>
              </div>

              {/* Stats Section */}
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex justify-content-center align-items-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-book" style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <h4>0</h4>
                      <p className="text-muted mb-0">Các khóa học của bạn</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex justify-content-center align-items-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-mortarboard" style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <h4>0</h4>
                      <p className="text-muted mb-0">Đang học</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex justify-content-center align-items-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-trophy" style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <h4>0</h4>
                      <p className="text-muted mb-0">Đã hoàn thành</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <Settings/>
          )}

{activeTab === "courses" && (
         
         <CoursesTab/>
          )}
          
{activeTab === "wishlist" && (
         
         <Wishlist/>
          )}
          {activeTab === "orderHistory" && (
         
         <OrderHistory/>
          )}
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Profile;
