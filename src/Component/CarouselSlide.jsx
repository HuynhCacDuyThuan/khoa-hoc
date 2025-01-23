import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/CarouselSlide.css"
const CarouselSlide = () => {
  return (
    <div
      className="container-fluid py-4 background-slide"
      
    >
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex flex-column align-items-center text-center">
              <h1 className="mb-3">CLB Cờ Vua Daisy</h1>
              <p className="mb-4">Học cờ vua cùng Daisy Chess.</p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://covuadaisy.com/dang-ki-hoc/"
                  className="btn btn-primary mx-2"
                >
                  Học Offline
                </a>
                <a
                  href="https://covuadaisy.com/khoa-hoc/"
                  className="btn btn-secondary mx-2"
                >
                  Học Online
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center text-center">
              <h1 className="mb-3">Giải Đấu Hấp Dẫn</h1>
              <p className="mb-4">Tham gia các giải đấu chuyên nghiệp cùng Daisy Chess.</p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://covuadaisy.com/giai-dau/"
                  className="btn btn-primary mx-2"
                >
                  Xem Giải Đấu
                </a>
                <a
                  href="https://covuadaisy.com/dang-ky/"
                  className="btn btn-secondary mx-2"
                >
                  Đăng Ký Ngay
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlide;
