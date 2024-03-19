import React, { useEffect, useState } from 'react';
import './ShowProblem.css'; // Import your CSS file
export default function ShowOrder() {
  const [user, setUser] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [runUseEffect, setRun] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [runUseEffect]);

  const handleClick = (user) => {
    setSelectedProblem(user);
  };

  const closeModal = () => {
    setSelectedProblem(null);
  };

  const showUsers = user.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.order}</td>
      {/* Assuming 'file' is a base64 encoded string */}
      <td><img src={`file.data:${user.contentType};base64,${user.file}`} alt="User File" /></td>
      <td>
        <button className="neumorphism-btn" onClick={() => handleClick(user)}>View Problem</button>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: '20px' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Notes</th>
            <th>Files</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {showUsers}
        </tbody>
      </table>

      {selectedProblem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>تفاصيل الطلب</h2>
            <p><strong>الاسم:</strong> {selectedProblem.name}</p>
            <p><strong>العنوان:</strong> {selectedProblem.address}</p>
            <p><strong>الرقم:</strong> {selectedProblem.phoneNumber}</p>
            <p><strong>ملاحظات:</strong> {selectedProblem.order}</p>
            <p><strong>الطلب:</strong><img src={`file.data:${selectedProblem.contentType};base64,${selectedProblem.file}`} alt="User File" /></p>
          </div>
        </div>
      )}
    </div>
  );
}
