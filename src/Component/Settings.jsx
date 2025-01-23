import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="container py-5">
      {/* Header */}
      <h2 className="mb-4">Cài đặt</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Hồ sơ
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "password" ? "active" : ""}`}
            onClick={() => setActiveTab("password")}
          >
            Mật khẩu
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "social" ? "active" : ""}`}
            onClick={() => setActiveTab("social")}
          >
            Hồ sơ xã hội
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && (
          <div className="col-lg-9">
          {/* Header */}
          <h2 className="mb-4">Cài đặt</h2>
    
          {/* Banner and Profile Picture */}
          <div className="mb-4 position-relative">
{/* Banner */}
<img
  src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/cover-photo.jpg"
  alt="Banner"
  className="w-100 rounded"
/>
<button className="btn btn-primary position-absolute bottom-0 end-0 m-3">
  Tải lên ảnh bìa
</button>

{/* Avatar */}
<div
  className="position-absolute top-50 start-0 translate-middle-y"
  style={{ zIndex: 1, marginLeft: "15px" }}
>
  <img
    src="https://via.placeholder.com/100"
    alt="Avatar"
    className="rounded-circle border border-3"
    style={{ width: "100px", height: "100px" }}
  />
</div>
</div>

    
          {/* Form */}
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Họ"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  Họ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Tên"
                />
              </div>
            </div>
    
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Tên đăng nhập
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@example.com"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
    
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="job" className="form-label">
                  Kỹ năng / Nghề nghiệp
                </label>
                <select id="job" className="form-select">
                  <option value="">Chọn nghề nghiệp</option>
                  <option value="IT">IT</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="status" className="form-label">
                  Trạng thái
                </label>
                <select id="status" className="form-select">
                  <option value="">Trạng thái</option>
                  <option value="Active">Hoạt động</option>
                  <option value="Inactive">Không hoạt động</option>
                </select>
              </div>
            </div>
    
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Tiểu sử
              </label>
              <textarea
                id="bio"
                className="form-control"
                rows="4"
                placeholder="Thêm tiểu sử..."
              ></textarea>
            </div>
    
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Tên hiển thị công khai
              </label>
              <select id="location" className="form-select">
                <option value="">Chọn tên hiển thị</option>
                <option value="Thuần Huỳnh">Thuần Huỳnh</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
    
            <button type="submit" className="btn btn-primary">
              Cập nhật thông tin
            </button>
          </form>
        </div>
        )}

        {activeTab === "password" && (
          <div>
            <h3>Mật khẩu</h3>
            {/* Nội dung tab Mật khẩu */}
            <form>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">
                  Mật khẩu hiện tại
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  placeholder="Nhập mật khẩu hiện tại"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  Mật khẩu mới
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Đổi mật khẩu
              </button>
            </form>
          </div>
        )}

        {activeTab === "social" && (
          <div>
            <h3>Hồ sơ xã hội</h3>
            {/* Nội dung tab Hồ sơ xã hội */}
            <form>
              <div className="mb-3">
                <label htmlFor="facebook" className="form-label">
                  Facebook
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  placeholder="URL Facebook"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="twitter" className="form-label">
                  Twitter
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="twitter"
                  placeholder="URL Twitter"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Lưu thay đổi
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
