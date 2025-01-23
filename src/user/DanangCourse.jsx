import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const DanangCourse = () => {
  return (
    <div>
        <Header/>
        <>
      {/* Phần lớp học cờ vua */}
      <section className="container my-5 py-5 bg-light rounded shadow-lg">
        <div className="row align-items-center">
          {/* Cột nội dung bên trái */}
          <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
            <h1 className="fw-bold display-4 text-primary mb-4">
              Lớp học cờ vua Daisy
            </h1>
            <p className="text-muted fs-5">
              Chào mừng đến với CLB Cờ Vua Daisy! Dù bạn là người mới hay kỳ thủ
              kinh nghiệm, Daisy luôn sẵn sàng chào đón bạn. Tham gia ngay để
              khám phá sự hấp dẫn của cờ vua!
            </p>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/channel/UCTVBTYxBnCS4q5Lcu5_4fhw"
                className="btn btn-danger btn-lg me-3 shadow"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/CLBDaisyCoVua"
                className="btn btn-primary btn-lg shadow"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Cột hình ảnh bên phải */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Hình ảnh chính */}
              <img
                src="https://covuadaisy.com/wp-content/uploads/2024/08/banner-trung-cap-1.png"
                alt="Chess class"
                className="img-fluid rounded shadow-lg"
                style={{ border: "5px solid #f8f9fa" }}
              />
              {/* Huy chương */}
              <div
                className="position-absolute top-0 start-0 translate-middle badge bg-warning text-dark rounded-circle shadow"
                style={{ padding: "1.5rem" }}
              >
                <img
                  src="https://covuadaisy.com/wp-content/uploads/2024/04/icon-huy-chuong.png"
                  alt="Medal Icon"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              {/* Hiệu ứng hình tròn nhỏ */}
              <div
                className="position-absolute bottom-0 end-0 translate-middle bg-primary rounded-circle shadow-lg"
                style={{ width: "50px", height: "50px", zIndex: 0 }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần hoạt động nổi bật */}
      <section className="container my-5 py-5">
  <div className="row text-center g-4">
    {/* Card 1 */}
    <div className="col-lg-4">
      <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center">
        <div
          className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center mb-4"
          style={{ width: "70px", height: "70px" }}
        ></div>
        <h4 className="fw-bold mb-3">Phát triển kỹ năng</h4>
        <p className="text-muted">
          CLB thường xuyên tổ chức các buổi tập luyện với hướng dẫn từ các
          thầy cô, giúp bé nâng cao chiến thuật và tư duy cờ vua.
        </p>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-lg-4">
      <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center">
        <div
          className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-4"
          style={{ width: "70px", height: "70px" }}
        ></div>
        <h4 className="fw-bold mb-3">Học tập linh hoạt</h4>
        <p className="text-muted">
          CLB Daisy cung cấp các buổi học cờ vua phù hợp với mọi trình độ, giúp
          bạn tiến bộ theo tốc độ của riêng mình.
        </p>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-lg-4">
      <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center">
        <div
          className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center mb-4"
          style={{ width: "70px", height: "70px" }}
        ></div>
        <h4 className="fw-bold mb-3">Hoạt động cộng đồng sôi nổi</h4>
        <p className="text-muted">
          Daisy thường xuyên tổ chức các buổi gặp mặt, sự kiện giao lưu và các
          hoạt động ngoài cờ vua, giúp kết nối các thành viên.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
        <Footer/>
    </div>
  );
};

export default DanangCourse;
