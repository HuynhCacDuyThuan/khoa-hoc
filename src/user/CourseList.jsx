import React from "react";
import "../css/CourseList.css"
import Header from "../Component/Header";
import Footer from "../Component/Footer";
const CourseList = () => {

    const courses = [
        {
          id: 1,
          title: "Cờ tàn xe nâng cao | Master Class",
          image: "https://covuadaisy.com/wp-content/uploads/2024/04/Banner-2-3.png",
          instructor: "Daisy Cờ Vua",
          category: "Master Class",
          duration: "8h 10m",
          price: {
            original: 900000,
            discounted: 399000,
          },
          rating: 5.0,
          reviews: 1,
        },
        {
          id: 2,
          title: "Cùng Bé Khám Phá Thế Giới Cờ Vua",
          image: "https://covuadaisy.com/wp-content/uploads/2024/12/Banner-1.png",
          instructor: "Daisy Cờ Vua",
          category: "Học cơ bản",
          duration: "10h",
          price: {
            original: 999000,
            discounted: 599000,
          },
          rating: 5.0,
          reviews: 1,
        },
        {
          id: 3,
          title: "Phòng thủ cơ bản dành cho người mới bắt đầu",
          image: "https://covuadaisy.com/wp-content/uploads/2024/12/Banner-7.png",
          instructor: "Daisy Cờ Vua",
          category: "Cơ bản",
          duration: "5h 20m",
          price: {
            original: 700000,
            discounted: 299000,
          },
          rating: 5.0,
          reviews: 2,
        },
        {
          id: 4,
          title: "Chiến thuật và khai cuộc nâng cao",
          image: "https://covuadaisy.com/wp-content/uploads/2024/12/Banner-7.png",
          instructor: "Daisy Cờ Vua",
          category: "Nâng cao",
          duration: "12h 15m",
          price: {
            original: 1200000,
            discounted: 899000,
          },
          rating: 4.8,
          reviews: 5,
        },
        {
          id: 5,
          title: "Phát triển chiến lược trong trung cuộc",
          image: "https://covuadaisy.com/wp-content/uploads/2024/12/Banner-7.png",
          instructor: "Daisy Cờ Vua",
          category: "Trung cấp",
          duration: "9h 30m",
          price: {
            original: 1100000,
            discounted: 799000,
          },
          rating: 4.9,
          reviews: 3,
        },
        {
          id: 6,
          title: "Khám phá các nước cờ sáng tạo | Master Class",
          image: "https://covuadaisy.com/wp-content/uploads/2024/07/Banner-6.png",
          instructor: "Daisy Cờ Vua",
          category: "Master Class",
          duration: "15h",
          price: {
            original: 1500000,
            discounted: 1099000,
          },
          rating: 4.7,
          reviews: 4,
        },
      ];
  return (
    <div>
        <Header/>
        <div className="container mt-4">
      <div className="row">
        {/* Cột Bộ lọc */}
        <div className="col-md-3 mb-2">
          <div className="card shadow-sm border-0">
            <div className="card-header  text-white text-center">
              <h5 className="mb-0"></h5>
            </div>
            <div className="card-body">
              <form>
                {/* Tìm kiếm */}
                <div className="mb-4">
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i> {/* Bootstrap Icon */}
        </span>
        <input
          type="search"
          className="form-control"
          id="search"
          placeholder="Nhập từ khóa"
        />
      </div>
    </div>

                {/* Bộ lọc Type */}
                <div className="mb-4">
                  <h6 className="text-primary fw-bold" style={{ display: "flex" }}>Type</h6>
                  <div className="form-check d-flex align-items-center">
  <input
    className="form-check-input me-2" // Thêm "me-2" để tạo khoảng cách nhỏ (nếu cần)
    type="checkbox"
    id="course"
    value="course"
  />
  <label className="form-check-label" htmlFor="course">
    Course
  </label>
</div>
<div className="form-check d-flex align-items-center">
  <input
    className="form-check-input me-2"
    type="checkbox"
    id="bundle"
    value="bundle"
  />
  <label className="form-check-label mb-0" htmlFor="bundle">
    Bundle
  </label>
</div>

                </div>

                {/* Bộ lọc Loại */}
                <div className="mb-4">
  <h6 className="text-primary fw-bold" style={{ display: "flex" }}>Loại</h6>
  {[
    "Bài tập",
    "Bên Ngoài Cờ vua",
    "Chiến lược",
    "Chiến thuật",
    "Chiếu hết",
    "Học cờ cơ bản",
    "Học qua sách",
    "Khai cuộc",
    "Master Class",
    "Opening Repertoire",
    "Tàn cuộc",
    "Tính toán",
  ].map((item, index) => (
    <div className="form-check d-flex align-items-center" key={index}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        id={`category${index}`}
        value={`category${index}`}
      />
      <label
        className="form-check-label mb-0"
        htmlFor={`category${index}`}
      >
        {item}
      </label>
    </div>
  ))}
</div>


              {/* Bộ lọc Mức độ */}
<div className="mb-4">
  <h6 className="text-primary fw-bold" style={{ display: "flex" }}>Mức độ</h6>
  {["Tất cả trình độ", "Sơ cấp", "Trung cấp", "Cao cấp"].map(
    (level, index) => (
      <div className="form-check d-flex align-items-center" key={index}>
        <input
          className="form-check-input me-2"
          type="checkbox"
          id={`level${index}`}
          value={`level${index}`}
        />
        <label
          className="form-check-label mb-0"
          htmlFor={`level${index}`}
        >
          {level}
        </label>
      </div>
    )
  )}
</div>


                {/* Bộ lọc Giá */}
                <div className="mb-4">
  <h6 className="text-primary fw-bold" style={{ display: "flex" }}>Giá</h6>
  <div className="form-check d-flex align-items-center">
    <input
      className="form-check-input me-2"
      type="checkbox"
      id="free"
      value="free"
    />
    <label className="form-check-label mb-0" htmlFor="free">
      Miễn phí
    </label>
  </div>
  <div className="form-check d-flex align-items-center">
    <input
      className="form-check-input me-2"
      type="checkbox"
      id="paid"
      value="paid"
    />
    <label className="form-check-label mb-0" htmlFor="paid">
      Trả phí
    </label>
  </div>
</div>


                {/* Nút xóa bộ lọc */}
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => window.location.reload()}
                  >
                    Xóa tất cả bộ lọc
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Cột hiển thị nội dung khác */}
        <div className="col-md-9 mb-2">
        <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-thumbnail">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-details">
            <a href="/course-detail" style={{ textDecoration: "none" }}>
  <h3 className="course-title">{course.title}</h3>
</a>

         
              <p>Giảng viên: {course.instructor}</p>
              <p>Thời lượng: {course.duration}</p>
              <p>Danh mục: {course.category}</p>
              <div className="course-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < Math.round(course.rating) ? '#FFD700' : '#dcdcdc',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="course-price">
                <div>
                  <span className="original-price">{course.price.original.toLocaleString()}₫</span>
                 <br/>
                  <span className="discounted-price">{course.price.discounted.toLocaleString()}₫</span>
                </div>
                <button className="buy-course-btn">Mua khóa học</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default CourseList;
