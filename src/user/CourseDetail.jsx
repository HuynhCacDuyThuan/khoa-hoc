import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const CourseDetail = () => {
    const course = {
        id: 1,
        title: "Chinh phục Vienna – Khai cuộc độc đáo nhất trong cờ vua.",
        image: "https://covuadaisy.com/wp-content/uploads/2024/04/Banner-2-3.png",
        instructor: "Daisy Cờ Vua",
        category: "Chiến lược, Khai cuộc",
        duration: "3 giờ 20 phút",
        price: 229000,
        rating: 5.0,
        reviews: 3,
        level: "Trung cấp",
        students: 14,
        updateDate: "16 Tháng Chín 2024",
        certificate: true,
        contents: [
          {
            title: "Giới thiệu khai cuộc Vienna.",
            lessons: [
              { title: "Tại sao lại học Vienna.", duration: "02:32", locked: true },
              { title: "Các phương án của Vienna.", duration: "02:54", locked: true },
            ],
          },
          { title: "Phương án: Max Lange Defense." },
          { title: "Phương án Anderssen." },
          { title: "Vienna Gambit." },
          { title: "Phương án Mieses." },
        ],
      };

  const [activeTab, setActiveTab] = useState('description');

  return (
   <div>
    <Header/>
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          <h1 className="fw-bold text-primary mb-3">{course.title}</h1>
          <div className="d-flex align-items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < Math.round(course.rating) ? '#FFD700' : '#dcdcdc',
                  fontSize: '20px',
                }}
              >
                ★
              </span>
            ))}
            <span className="ms-2 text-muted">{course.rating} ({course.reviews} Đánh giá)</span>
          </div>
          <p className="text-secondary">Danh mục: {course.category}</p>

          <div className="mt-4">

          <div>
                <img src={course.image} alt={course.title} className="img-fluid rounded shadow mb-4" />
               
              </div>
              <ul className="nav nav-tabs mt-5">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Giới thiệu
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Đánh giá
              </button>
            </li>
          </ul>
            {activeTab === 'description' && (
           <div className='mb-2'>

<div>
                <h5 className="fw-bold mt-2">Giới thiệu về khóa học</h5>
                <p className="text-justify">
                  Khóa học này sẽ giúp bạn làm chủ Khai cuộc Vienna – một lựa chọn tinh tế và đầy sáng tạo dành cho người chơi cờ vua muốn khai thác các thế trận độc đáo. Với nước đi 1.e4 e5 2.Mc3, Khai cuộc Vienna không chỉ mở ra những cuộc tấn công mạnh mẽ mà còn tạo điều kiện cho sự kế hoạch sáng tạo từ cả hai phía.
                </p>
                <p className="text-justify">
                  <strong>Trong khóa học, bạn sẽ:</strong>
                  <ul>
                    <li>Hiểu rõ các biến thể chính của Khai cuộc Vienna và cách tận dụng lợi thế trong từng tình huống.</li>
                    <li>Khám phá những phương án tấn công sắc bén như Gambit Vienna, giúp tạo sức ép mạnh mẽ lên đối thủ từ những nước đi đầu tiên.</li>
                    <li>Tìm hiểu cách phản ứng linh hoạt và xử lý những tình huống phức tạp khi đối thủ không theo các nước đi thông thường.</li>
                    <li>Phân tích các trận đấu thực tế và chiến lược của các kỳ thủ hàng đầu khi áp dụng Khai cuộc Vienna.</li>
                  </ul>
                </p>
                <p className="text-justify">
                  Khóa học phù hợp với những người chơi từ cấp trung bình trở lên, muốn nâng cao kỹ năng khai cuộc và làm phong phú thêm phong cách chơi của mình.
                </p>
              </div>
          

              <div>
                <h5 className="fw-bold">Nội dung khóa học</h5>
                <div className="accordion" id="courseContent">
                  {course.contents.map((content, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                        >
                          {content.title}
                        </button>
                      </h2>
                      </h2>
                      {content.lessons && (
                        <div
                          id={`collapse${index}`}
                          className="accordion-collapse collapse show"
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#courseContent"
                        >
                    <div className="accordion-body">
  <ul className="list-unstyled">
    {content.lessons.map((lesson, lessonIndex) => (
      <li
        key={lessonIndex}
        className="d-flex justify-content-between align-items-center py-2"
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-play-circle-fill text-primary me-2"></i>
          <span>{lesson.title}</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="text-muted small">{lesson.duration}</span>
          {lesson.locked && (
            <i
              className="bi bi-lock-fill ms-2 text-muted"
              title="Locked"
            ></i>
          )}
        </div>
      </li>
    ))}
  </ul>
</div>

                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
           </div>
            )}
            {activeTab === 'reviews' && (
              <div className='mb-2'>
               <div>
                <h5 className="fw-bold mt-2">Đánh giá</h5>
                <div className="card p-3 mb-3 shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://covuadaisy.com/wp-content/uploads/2024/09/bobby-fischer-vaultjpg-1-150x150.jpg"
                      alt="Võ Duy Win"
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h6 className="mb-0">Võ Duy Win</h6>
                      <small className="text-muted">4 tháng trước</small>
                    </div>
                  </div>
                  <p className="mb-1">khoá học hay, có thể sẽ là khai cuộc tủ của em.</p>
                  <div className="text-warning">★★★★★</div>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <span className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>BT</span>
                    <div>
                      <h6 className="mb-0">Bùi Tuấn</h6>
                      <small className="text-muted">4 tháng trước</small>
                    </div>
                  </div>
                  <p className="mb-1">Khai cuộc tưởng cơ bản nhưng nhiều bẫy mạnh. Khoá học hay.</p>
                  <div className="text-warning">★★★★★</div>
                </div>

                <div className="card p-3 shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://covuadaisy.com/wp-content/uploads/2024/07/anh-dai-dien-150x150.jpg"
                      alt="Nguyễn Thanh Hậu"
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h6 className="mb-0">Nguyễn Thanh Hậu</h6>
                      <small className="text-muted">4 tháng trước</small>
                    </div>
                  </div>
                  <p className="mb-1">Nếu bạn thấy khoá học hay, hãy cho mình 5 sao nhé!</p>
                  <div className="text-warning">★★★★★</div>
                </div>
              </div>
              </div>
            )}
          </div>

          {/* Tabs */}
         
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body">
              <h3 className="text-danger fw-bold text-center mb-3">{course.price.toLocaleString()}₫</h3>
              <button className="btn btn-primary w-100 mb-3">Mua khóa học</button>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-bar-chart me-2 text-primary"></i> {course.level}
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-people me-2 text-primary"></i> {course.students} Tổng số học viên
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-clock me-2 text-primary"></i> {course.duration} Thời lượng
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-calendar3 me-2 text-primary"></i> Cập nhật: {course.updateDate}
                </li>
                {course.certificate && (
                  <li className="d-flex align-items-center">
                    <i className="bi bi-patch-check me-2 text-primary"></i> Certificate of completion
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="card mt-4 shadow border-0">
            <div className="card-body">
            
              <div className="mb-4">
                <h6 className="fw-bold" style={{ display: "flex" }}>Khóa học bởi</h6>
                <div className="d-flex align-items-center">
                  <img
                    src="https://covuadaisy.com/wp-content/uploads/2024/04/logo-den-150x150.jpg"
                    alt="Daisy Cờ Vua"
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <div>
                    <a
                      style={{ display: "flex" }}
                      className="text-decoration-none fw-bold text-dark"
                    >
                      Daisy Cờ Vua
                    </a>
                    <p className="text-muted small mb-0">Giáo viên cờ vua - Huấn Luyện viên Quốc Gia</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold">Các tài liệu khoá học</h6>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-file-earmark-text-fill text-primary me-2"></i>
                    Bài giảng
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-text-fill text-primary me-2"></i>
                    Bài tập
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold">Từ khoá</h6>
                <div className="d-flex flex-wrap">
                  <a href="#" className="badge bg-primary text-white me-2 mb-2">Anderssen</a>
                  <a href="#" className="badge bg-primary text-white me-2 mb-2">Bẫy khai cuộc Vienna</a>
                  <a href="#" className="badge bg-primary text-white mb-2">Max Lange</a>
                </div>
              </div>
              <div>
                <h6 className="fw-bold">Đối tượng</h6>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="bi bi-people-fill text-primary me-2"></i>
                    Những bạn rating 1200 - 2100
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>

        
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default CourseDetail;
