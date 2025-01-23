import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentManagement from "./StudentManagement";
import TeacherManagement from "./TeacherManagement";
import CourseManagement from "./CourseManagement";
import LessonManagement from "./LessonManagement";
import PostManagement from "./PostManagement";
import MessageManagement from "./MessageManagement";
import VoucherManagement from "./VoucherManagement";
import AttendanceManagement from "./AttendanceManagement";
import { AuthContext } from "../AuthContext";

const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState("students"); // Default tab
  const { userRole } = useContext(AuthContext); // Lấy role từ context
  const renderContent = () => {
    switch (activeTab) {
      case "students":
        return <StudentManagement />;
      case "teachers":
        return <TeacherManagement />;
      case "courses":
        return <CourseManagement />;
      case "lessons":
        return <LessonManagement />;
      case "posts":
        return <PostManagement />;
      case "messages":
        return <MessageManagement />;
      case "vouchers":
        return <VoucherManagement />;
        case "attendance":
            return <AttendanceManagement />;
      default:
        return <div>Chọn một tab để hiển thị nội dung</div>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-sm-12 bg-light border-end vh-100 shadow-sm">
          <h5 className="text-center py-3 fw-bold text-primary border-bottom">
            Admin Panel
          </h5>
          <ul className="list-group list-group-flush">
          

          {(userRole === "teacher" || userRole === "admin") && (
  <>
      <li
                  className={`list-group-item border-0 ${
                    activeTab === "students" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("students")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-people-fill me-3 fs-5"></i>
                  <span>Quản lý học viên</span>
                </li>
  </>
)}

{(userRole === "admin") && (
  <>
      <li
                  className={`list-group-item border-0 ${
                    activeTab === "teachers" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("teachers")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-person-workspace me-3 fs-5"></i>
                  <span>Quản lý giáo viên</span>
                </li>
  </>
)}


              
{(userRole === "teacher" || userRole === "admin") && (
  <>
     <li
              className={`list-group-item border-0 ${
                activeTab === "courses" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveTab("courses")}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-book-fill me-3 fs-5"></i>
              <span>Quản lý khóa học</span>
            </li>
  </>
)}


             
{(userRole === "admin") && (
  <>
    <li
              className={`list-group-item border-0 ${
                activeTab === "lessons" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveTab("lessons")}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-journal-text me-3 fs-5"></i>
              <span>Quản lý bài học</span>
            </li>
  </>
)}


{( userRole === "admin") && (
  <>
     <li
                  className={`list-group-item border-0 ${
                    activeTab === "posts" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("posts")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-newspaper me-3 fs-5"></i>
                  <span>Quản lý bài viết</span>
                </li>
  </>
)}


{( userRole === "admin") && (
  <>
      <li
                  className={`list-group-item border-0 ${
                    activeTab === "messages" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("messages")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-chat-left-text-fill me-3 fs-5"></i>
                  <span>Quản lý tin nhắn</span>
                </li>
  </>
)}


               
{(userRole === "admin") && (
  <>
     <li
                  className={`list-group-item border-0 ${
                    activeTab === "vouchers" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("vouchers")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-tag-fill me-3 fs-5"></i>
                  <span>Quản lý voucher giảm giá</span>
                </li>

  </>
)}


               
                {userRole === "teacher" && (
              <>
              <li
                  className={`list-group-item border-0 ${
                    activeTab === "attendance" ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveTab("attendance")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-calendar-check-fill me-3 fs-5"></i>
                  <span>Điểm danh</span>
                </li>
              </>
            )}
                <li
    className="list-group-item border-0 text-danger"
    onClick={() => {
      localStorage.removeItem("loggedInUser"); // Xóa thông tin người dùng
      window.location.href = "/login"; // Điều hướng về trang đăng nhập
    }}
    style={{ cursor: "pointer" }}
  >
    <i className="bi bi-box-arrow-right me-3 fs-5"></i>
    <span>Đăng xuất</span>
  </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-sm-12">
          <div className="">
            <div className="mt-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
