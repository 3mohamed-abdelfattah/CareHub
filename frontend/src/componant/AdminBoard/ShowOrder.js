import React, { useEffect, useState } from 'react';
import './ShowProblem.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import defaultImage from '../Photos/noData.jpg';

export default function ShowOrder() {
  const [users, setUsers] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  const handleClick = (user) => {
    setSelectedProblem(user);
  };

  const closeModal = () => {
    setSelectedProblem(null);
  };

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.order}</td>
      <td>
        <button className="neumorphism-btn" onClick={() => handleClick(user)}>
          View Order
        </button>
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
            <div>
              <h1>تفاصيل الطلب</h1>
              <p><strong>الاسم:</strong> {selectedProblem.name}</p>
              <p><strong>العنوان:</strong> {selectedProblem.address}</p>
              <p><strong>الرقم:</strong> {selectedProblem.phoneNumber}</p>
              <p><strong>الطلب:</strong> {selectedProblem.order}</p>
            </div>
            <Zoom>
              <img
                style={{ maxHeight: '600px', maxWidth: '500px' }}
                src={selectedProblem.image ? `http://localhost:5000/uploads/${selectedProblem.image}` : defaultImage}
                alt=""
                onError={(e) => e.target.src = defaultImage} // لضمان عرض الصورة الافتراضية في حالة حدوث خطأ
              />
            </Zoom>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
