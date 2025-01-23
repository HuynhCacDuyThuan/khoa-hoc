import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OnlineCourse = () => {
  return (
    <div
    className="d-flex justify-content-center align-items-center vh-100 w-100 bg-light"
    style={{ overflow: "hidden" }}
  >
      <a href="https://covuadaisy.com/khoa-hoc/" className="d-block">
        <img
          src="https://covuadaisy.com/wp-content/uploads/2024/09/khoa-hoc-online-1024x576.png"
          alt="Khóa học online"
          className="img-fluid rounded hover-shadow transition"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            transition: "box-shadow 0.3s ease-in-out",
            objectFit: "cover",
          }}
        />
      </a>
    </div>
  );
};

export default OnlineCourse;
