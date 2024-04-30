import React, { useEffect, useState } from 'react';
import './ShowProblem.css';

export default function ShowOrder() {
  const [user, setUser] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);



  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/order-image/662fd4d16f01a945f0117fba")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

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
      <td>{user.image}</td>
      <td>
        <button className="neumorphism-btn" onClick={() => handleClick(user)}>View Order</button>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: '10px', maxHeight: '550px', overflowY: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Notes</th>
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
            <p><strong>الطلب:</strong> {selectedProblem.order}</p>
            <p><strong>ملاحظات:</strong><img src={selectedProblem.image} alt="User File" /></p> {/* تأكد من عرض الصورة بشكل صحيح */}
          </div>
        </div>
      )}

    </div>
  );
}
