import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Nguyen Van A", dob: "1985-03-15", email: "a@gmail.com", phone: "0123456789" },
    { id: 2, name: "Tran Thi B", dob: "1990-07-22", email: "b@gmail.com", phone: "0987654321" },
  ]);

  const [newTeacher, setNewTeacher] = useState({ name: "", dob: "", email: "", phone: "" });
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingTeacher) {
      setEditingTeacher({ ...editingTeacher, [name]: value });
    } else {
      setNewTeacher({ ...newTeacher, [name]: value });
    }
  };

  const handleAddTeacher = () => {
    const newId = teachers.length > 0 ? teachers[teachers.length - 1].id + 1 : 1;
    setTeachers([...teachers, { id: newId, ...newTeacher }]);
    setNewTeacher({ name: "", dob: "", email: "", phone: "" });
    setShowModal(false);
  };

  const handleUpdateTeacher = () => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === editingTeacher.id ? editingTeacher : teacher
      )
    );
    setEditingTeacher(null);
    setShowModal(false);
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý giáo viên</h3>

      {/* Nút mở modal thêm giáo viên */}
      <div className="text-end mb-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingTeacher(null);
            setShowModal(true);
          }}
        >
          Thêm giáo viên
        </button>
      </div>

      {/* Modal thêm/sửa giáo viên */}
      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editingTeacher ? "Sửa giáo viên" : "Thêm giáo viên"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Họ và tên"
                      value={editingTeacher ? editingTeacher.name : newTeacher.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="dob"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Ngày sinh"
                      value={editingTeacher ? editingTeacher.dob : newTeacher.dob}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Email"
                      value={editingTeacher ? editingTeacher.email : newTeacher.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Số điện thoại"
                      value={editingTeacher ? editingTeacher.phone : newTeacher.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary rounded-3"
                    onClick={() => setShowModal(false)}
                  >
                    Hủy
                  </button>
                  {editingTeacher ? (
                    <button
                      className="btn btn-warning rounded-3"
                      onClick={handleUpdateTeacher}
                    >
                      Cập nhật
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary rounded-3"
                      onClick={handleAddTeacher}
                    >
                      Thêm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Bảng thông tin giáo viên */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover rounded-3">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <tr key={teacher.id}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.dob}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2 rounded-3"
                      onClick={() => handleDeleteTeacher(teacher.id)}
                    >
                      Xóa
                    </button>
                    <button
                      className="btn btn-warning btn-sm rounded-3"
                      onClick={() => handleEditTeacher(teacher)}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Không có giáo viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherManagement;
