import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

const OnlineCourseUpgrade = () => {
  return (
   <div>
    <Header/>
    <section className="container my-5 py-5">
      {/* Phần tiêu đề */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-primary">Khóa cờ vua Daisy</h1>
        <p className="text-muted fs-4">
          Tìm hiểu thế giới cờ vua từ cơ bản đến nâng cao.
        </p>
      </div>

      {/* Khóa học đội tuyển */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="fw-bold text-primary display-5 mb-4">
            Khóa cờ vua đội tuyển
          </h1>
          <p className="text-muted fs-5 mb-4">
            Cờ vua không chỉ là một trò chơi. Đó là một hành trình khám phá và
            một cuộc phiêu lưu trí tuệ.
          </p>
          <a href="#explore" className="btn btn-primary btn-lg shadow-sm px-4">
            Tìm hiểu thêm
          </a>
        </div>
        <div className="col-lg-6 text-center position-relative">
          <img
            src="https://covuadaisy.com/wp-content/uploads/2024/09/doi-tuyen.png"
            alt="Daisy Chess Team"
            className="img-fluid rounded shadow w-75"
            style={{ maxWidth: "300px" }}
          />
          <div
            className="position-absolute top-0 start-0 translate-middle bg-light rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              zIndex: -1,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            className="position-absolute bottom-0 end-0 translate-middle bg-primary rounded-circle"
            style={{
              width: "30px",
              height: "30px",
              zIndex: -1,
              transform: "translate(50%, 50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Chiến lược nâng cao */}
      <div className="text-center mt-5 mb-5">
        <h3 className="text-uppercase text-primary">Daisy</h3>
        <h2 className="fw-bold display-5">Chiến lược và chiến thuật nâng cao</h2>
        <p className="text-muted fs-4">Làm chủ từng nước đi, kiểm soát mọi ván đấu.</p>
      </div>
      <div className="row g-4 d-flex align-items-stretch">
        {[
          {
            title: "Nội dung chất lượng cao",
            text: "Tập trung vào các chiến lược và kỹ thuật cao cấp.",
            img: "https://covuadaisy.com/wp-content/uploads/2024/09/pic-1.png",
          },
          {
            title: "Nền tảng học tập tương tác.",
            text: "Dễ dàng tham gia các bài giảng trực tuyến qua nhiều thiết bị.",
            img: "https://covuadaisy.com/wp-content/uploads/2024/09/pic-3.png",
          },
          {
            title: "Phân tích cá nhân.",
            text: "Nhận phản hồi và đánh giá từ giảng viên về các ván đấu của học viên.",
            img: "https://covuadaisy.com/wp-content/uploads/2024/09/pic-4.png",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="text-center p-4 bg-white rounded shadow-lg position-relative h-100">
              <div
                className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  zIndex: 0,
                  opacity: 0.1,
                }}
              ></div>
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid mb-3 position-relative"
                style={{ maxWidth: "80px", zIndex: 1 }}
              />
              <h4 className="fw-bold text-secondary position-relative">
                {item.title}
              </h4>
              <p className="text-muted position-relative">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Học phí */}
      <div className="text-center mt-5 mb-5">
        <h2 className="fw-bold display-5">Học phí</h2>
        <p className="text-primary fs-4">Lựa chọn gói học phù hợp với bạn</p>
      </div>
      <div className="row g-4">
        {[
          {
            title: "Khoá 10 buổi",
            subtitle: "(130.000₫ / Buổi)",
            price: "1.300.000",
            link: "#",
          },
          {
            title: "Theo kì học (45 buổi)",
            subtitle: "(120.000₫ / Buổi)",
            price: "5.400.000",
            link: "#",
          },
          {
            title: "Đóng theo khoá (90 buổi)",
            subtitle: "(105.000₫ / Buổi)",
            price: "9.500.000",
            link: "#",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="p-4 bg-white rounded shadow text-center h-100">
              <h4 className="fw-bold">{item.title}</h4>
              <p className="text-muted">{item.subtitle}</p>
              <div className="my-3">
                <span className="fs-1 fw-bold text-primary">₫ {item.price}</span>
              </div>
              <a href={item.link} className="btn btn-outline-primary">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default OnlineCourseUpgrade;
