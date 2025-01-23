import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ChessSection.css"
const ChessSection = () => {
  return (
    <section className="d-flex align-items-center py-5 bg-light w-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Hình ảnh */}
          <div className="col-md-6 text-center">
            <img
              src="https://covuadaisy.com/wp-content/uploads/2024/04/pic1.png"
              alt="Chess Illustration"
              className="chess-image"
            />
          </div>
          {/* Tiêu đề và mô tả */}
          <div className="col-md-6">
            <h2 className="text-primary mb-3">Tìm hiểu mọi thứ về cờ vua.</h2>
            <p className="text-secondary">
              Cùng CLB tham quan thế giới cờ vua với những khóa học online - Offline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessSection;
