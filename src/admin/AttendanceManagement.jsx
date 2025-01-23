import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceManagement = () => {
  const [classes] = useState([
    { id: 1, name: "Lớp A", students: [
        { id: 1, name: "Nguyen Van A" },
        { id: 2, name: "Tran Thi B" },
      ]
    },
    { id: 2, name: "Lớp B", students: [
        { id: 3, name: "Le Thi C" },
        { id: 4, name: "Pham Van D" },
      ]
    },
  ]);

  const [selectedClassId, setSelectedClassId] = useState(null);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedDate]: {
        ...prev[selectedDate],
        [studentId]: status,
      },
    }));
  };

  const selectedClass = classes.find((cls) => cls.id === selectedClassId);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Điểm danh theo lớp</h3>

      {/* Chọn lớp */}
      <div className="mb-4">
        <label className="form-label">Chọn lớp:</label>
        <select
          className="form-control w-25"
          value={selectedClassId || ""}
          onChange={(e) => setSelectedClassId(parseInt(e.target.value, 10))}
        >
          <option value="">-- Chọn lớp --</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chọn ngày */}
      {/* <div className="mb-4">
        <label className="form-label">Chọn ngày:</label>
        <input
          type="date"
          className="form-control w-25"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div> */}

      {/* Danh sách sinh viên */}
      {selectedClass ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Tên học viên</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className={`btn btn-sm ${
                          attendance[selectedDate]?.[student.id] === "present"
                            ? "btn-success"
                            : "btn-outline-success"
                        }`}
                        onClick={() => handleAttendanceChange(student.id, "present")}
                      >
                        Có mặt
                      </button>
                      <button
                        className={`btn btn-sm ${
                          attendance[selectedDate]?.[student.id] === "absent"
                            ? "btn-danger"
                            : "btn-outline-danger"
                        }`}
                        onClick={() => handleAttendanceChange(student.id, "absent")}
                      >
                        Vắng mặt
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted">Hãy chọn một lớp để bắt đầu điểm danh.</p>
      )}
    </div>
  );
};

export default AttendanceManagement;
