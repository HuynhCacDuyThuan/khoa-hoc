import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Đỗ Văn",
      role: "Phụ huynh học sinh",
      comment: "Thầy cô dạy nhiệt tình, tận tình, có tâm",
      image: "https://covuadaisy.com/wp-content/uploads/2024/04/person1.png",
      rating: 5,
    },
    {
      name: "Nguyễn Anh",
      role: "Phụ huynh học sinh",
      comment: "Cơ sở vật chất tốt, giáo viên tận tâm.",
      image: "https://covuadaisy.com/wp-content/uploads/2024/04/person1.png",
      rating: 5,
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Nhận xét</h2>
        <p>Những đánh giá được chính phụ huynh và học viên Daisy đánh giá.</p>
      </div>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <p className="card-text">"{testimonial.comment}"</p>
                <div className="d-flex justify-content-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i
                      className="fas fa-star text-warning"
                      key={i}
                      style={{ margin: "0 2px" }}
                    ></i>
                  ))}
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mt-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h5 className="card-title mt-3">{testimonial.name}</h5>
                <p className="text-muted">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
