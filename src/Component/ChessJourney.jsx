import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ChessJourney = () => {
  return (
    <section
      className="container-fluid py-5"
      
    >
      {/* Tiêu đề */}
     

      <div className="row justify-content-center">
        {/* Cột trái */}
        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center text-center mb-4">
        <div className="text-center mb-5">
        <h6 className="text-muted">Đồng hành cùng bé trên con đường cờ vua.</h6>
        <h2 className="fw-bold" style={{ color: "#5b49b1" }}>
          Hành Trình Tri Thức Cờ Vua.
        </h2>
      </div>
          <a
            href="https://www.youtube.com/embed/BJq4d1-lHq8"
            className="btn btn-primary btn-lg rounded-circle p-4"
            style={{
              backgroundColor: "#5b49b1",
              border: "none",
              boxShadow: "0px 4px 10px rgba(91, 73, 177, 0.4)",
            }}
            aria-label="Video Popup"
          >
            <i className="icon-play" style={{ fontSize: "24px", color: "#fff" }}></i>
          </a>
        </div>

        {/* Cột phải */}
        <div className="col-md-4">
          <div className="row">
            {/* Kiến thức */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 rounded shadow"
                style={{
                  backgroundColor: "#f9f9ff",
                  borderLeft: "4px solid #5b49b1",
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: "#5b49b1" }}>
                  Kiến thức.
                </h4>
                <p className="text-muted mb-0">
                  Khóa học được cập nhật thường xuyên với lý thuyết mới nhất.
                </p>
              </div>
            </div>

            {/* Trình độ */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 rounded shadow"
                style={{
                  backgroundColor: "#f9f9ff",
                  borderLeft: "4px solid #ff6b6b",
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: "#ff6b6b" }}>
                  Trình độ.
                </h4>
                <p className="text-muted mb-0">
                  Khóa học với nhiều độ khó khác nhau phù hợp với mọi trình độ cờ vua.
                </p>
              </div>
            </div>

            {/* Cộng đồng */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 rounded shadow"
                style={{
                  backgroundColor: "#f9f9ff",
                  borderLeft: "4px solid #1abc9c",
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: "#1abc9c" }}>
                  Cộng đồng.
                </h4>
                <p className="text-muted mb-0">
                  Cộng đồng thành viên lớn. 5.000 YouTube và 2.000 Facebook.
                </p>
              </div>
            </div>

            {/* Thời gian */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 rounded shadow"
                style={{
                  backgroundColor: "#f9f9ff",
                  borderLeft: "4px solid #3498db",
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: "#3498db" }}>
                  Thời gian.
                </h4>
                <p className="text-muted mb-0">
                  Thời gian học năng động phù hợp với các bé bận rộn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessJourney;
