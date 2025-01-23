import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LessonManagement = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Khóa học Lập trình React",
    },
    {
      id: 2,
      title: "Khóa học Python",
    },
  ]);

  const [lessons, setLessons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);

  const handleAddLesson = () => {
    setEditingLesson(null);
    setShowModal(true);
  };

  const handleEditLesson = (lesson) => {
    setEditingLesson(lesson);
    setShowModal(true);
  };

  const handleDeleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const handleSaveLesson = (newLesson) => {
    if (editingLesson) {
      setLessons(
        lessons.map((lesson) =>
          lesson.id === editingLesson.id ? { ...editingLesson, ...newLesson } : lesson
        )
      );
    } else {
      const newId = lessons.length > 0 ? lessons[lessons.length - 1].id + 1 : 1;
      setLessons([...lessons, { id: newId, ...newLesson }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">
        Quản lý bài học
      </h3>

      {/* Nút thêm bài học */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={handleAddLesson}>
          <i className="bi bi-plus-circle me-2"></i>Thêm bài học
        </button>
      </div>

      {/* Modal thêm/sửa bài học */}
      {showModal && (
        <LessonModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveLesson}
          lesson={editingLesson}
          courses={courses}
        />
      )}

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Tên bài học</th>
              <th>Video</th>
              <th>Khóa học</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {lessons.length > 0 ? (
              lessons.map((lesson, index) => (
                <tr key={lesson.id}>
                  <td>{index + 1}</td>
                  <td>{lesson.name}</td>
                  <td>{lesson.video}</td>
                  <td>{lesson.courseTitle}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditLesson(lesson)}
                    >
                      <i className="bi bi-pencil-square me-1"></i>Sửa
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteLesson(lesson.id)}
                    >
                      <i className="bi bi-trash me-1"></i>Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Không có bài học nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const LessonModal = ({ show, onClose, onSave, lesson, courses }) => {
  const [formState, setFormState] = useState(
    lesson || { name: "", video: "", courseId: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    const selectedCourse = courses.find((course) => course.id === parseInt(formState.courseId));
    onSave({ ...formState, courseTitle: selectedCourse?.title || "" });
  };

  return (
    <>
      {show && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{lesson ? "Sửa bài học" : "Thêm bài học"}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Tên bài học</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Video</label>
                  <input
                    type="text"
                    name="video"
                    className="form-control"
                    value={formState.video}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Khóa học</label>
                  <select
                    name="courseId"
                    className="form-control"
                    value={formState.courseId}
                    onChange={handleChange}
                  >
                    <option value="">-- Chọn khóa học --</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
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

export default LessonManagement;
