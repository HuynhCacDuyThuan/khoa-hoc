import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CoursesTab = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="col-lg-9">
      <h2 className="mb-4">Các Khóa Học Của Bạn</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            Các khóa học của bạn
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "active" ? "active" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            Đang học
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Đã hoàn thành
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* All Courses */}
        {activeTab === "all" && (
          <div className="tab-pane active">
            <div className="text-center">
              <img
                src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="Không có dữ liệu có sẵn trong phần này"
                style={{ width: "50%" }}
              />
              <p className="text-muted mt-3">Không có dữ liệu có sẵn trong phần này</p>
            </div>
          </div>
        )}

        {/* Active Courses */}
        {activeTab === "active" && (
          <div className="tab-pane active">
            <div className="text-center">
              <img
                src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="Không có dữ liệu có sẵn trong phần này"
                style={{ width: "50%" }}
              />
              <p className="text-muted mt-3">Không có dữ liệu có sẵn trong phần này</p>
            </div>
          </div>
        )}

        {/* Completed Courses */}
        {activeTab === "completed" && (
          <div className="tab-pane active">
            <div className="text-center">
              <img
                src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="Không có dữ liệu có sẵn trong phần này"
                style={{ width: "50%" }}
              />
              <p className="text-muted mt-3">Không có dữ liệu có sẵn trong phần này</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesTab;
