import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      image: "https://covuadaisy.com/wp-content/uploads/2024/04/Banner-2-3.png",
      title: "Khóa học Lập trình React",
      price: "1,500,000 VND",
      teacher: "Nguyen Van A",
      duration: "20 giờ",
    },
    {
      id: 2,
      image: "https://covuadaisy.com/wp-content/uploads/2024/04/Banner-2-3.png",
      title: "Khóa học Python",
      price: "2,000,000 VND",
      teacher: "Tran Thi B",
      duration: "25 giờ",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleAddCourse = () => {
    setEditingCourse(null);
    setShowModal(true);
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setShowModal(true);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleSaveCourse = (newCourse) => {
    if (editingCourse) {
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id ? { ...editingCourse, ...newCourse } : course
        )
      );
    } else {
      const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
      setCourses([...courses, { id: newId, ...newCourse }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý khóa học</h3>

      {/* Nút thêm khóa học */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={handleAddCourse}>
          <i className="bi bi-plus-circle me-2"></i>Thêm khóa học
        </button>
      </div>

      {/* Modal thêm/sửa khóa học */}
      {showModal && (
        <CourseModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveCourse}
          course={editingCourse}
        />
      )}

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card h-100">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text d-flex align-items-center">
                  <i className="bi bi-currency-dollar me-2 text-success"></i>
                  <strong>Giá:</strong> {course.price}
                </p>
                <p className="card-text d-flex align-items-center">
                  <i className="bi bi-person-fill me-2 text-info"></i>
                  <strong>Giáo viên:</strong> {course.teacher}
                </p>
                <p className="card-text d-flex align-items-center">
                  <i className="bi bi-clock-fill me-2 text-warning"></i>
                  <strong>Thời lượng:</strong> {course.duration}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEditCourse(course)}
                  >
                    <i className="bi bi-pencil-square me-1"></i>Sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <i className="bi bi-trash me-1"></i>Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const CourseModal = ({ show, onClose, onSave, course }) => {
  const [formState, setFormState] = useState(
    course || { image: "", title: "", price: "", teacher: "", duration: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSave(formState);
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{course ? "Sửa khóa học" : "Thêm khóa học"}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Hình ảnh</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                  {formState.image && (
                    <img
                      src={formState.image}
                      alt="Preview"
                      className="img-fluid mt-2 rounded"
                    />
                  )}
                </div>
                <div className="col-12">
                  <label className="form-label">Tên khóa học</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formState.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Giá</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    value={formState.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Giáo viên</label>
                  <input
                    type="text"
                    name="teacher"
                    className="form-control"
                    value={formState.teacher}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Thời lượng</label>
                  <input
                    type="text"
                    name="duration"
                    className="form-control"
                    value={formState.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Hủy
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
