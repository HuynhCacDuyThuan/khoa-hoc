import React, { useState } from "react";
import "../css/TeamSection.css";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Đức Phúc",
      image:
        "https://covuadaisy.com/wp-content/uploads/2024/04/z5311331778934_ae8dfe73c0288d245aa5e1227a885fae-1-768x1024.jpg",
      description: "Chăm chỉ làm bài tập để nhận huy chương.",
      phone: "+1 (859) 987-6543",
      email: "ducphuc@example.com",
    },
    {
      name: "Quốc An",
      image:
        "https://covuadaisy.com/wp-content/uploads/2024/04/z5311331796887_447364cf8399e17deb2da2f6ba062a28-768x1024.jpg",
      description: "Ôm đầu vì bài khó.",
      phone: "+1 (859) 123-4567",
      email: "quocan@example.com",
    },
    {
      name: "Team U7",
      image:
        "https://covuadaisy.com/wp-content/uploads/2024/04/z5311331821180_5ce845e64fdc0ce5713a9aadf39fb1d6-768x1024.jpg",
      description: "Vui vẻ chờ nhận huy chương.",
      phone: "+1 (859) 987-6543",
      email: "teamu7@example.com",
    },
  ];

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="pb-2 w-100">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="mb-3">Học Viên Daisy</h3>
          <p>Một số hình ảnh của các bé tại các giải đấu và học tập.</p>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 mb-4"
              key={index}
              onClick={() => handleCardClick(member)}
            >
              <div className="card text-center" style={{ cursor: "pointer" }}>
                <img
                  src={member.image}
                  className="card-img-top img-fluid"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <span>{member.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Ngăn việc đóng modal khi nhấn vào nội dung
          >
            <button
              className="modal-close"
              onClick={closeModal}
              
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body d-flex">
              <div className="modal-img-container">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="modal-img"
                />
              </div>
              <div className="modal-info">
                <h5 className="modal-title">{selectedMember.name}</h5>
                <p>{selectedMember.description}</p>
                <p>
                  <strong>Phone:</strong> {selectedMember.phone}
                </p>
                <p>
                  <strong>Email:</strong> {selectedMember.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
