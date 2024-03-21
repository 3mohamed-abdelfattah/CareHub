import React, { useEffect, useState } from 'react';
import './ShowProblem.css'; // قم بإنشاء ملف CSS لتصميم النافذة المنبثقة واستيراده هنا

export default function ShowProblem() {
    const [user, setUser] = useState([]);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [runUseEffect, setRun] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/api/complaint")
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            });
    }, [runUseEffect])

    const handleClick = (user) => {
        setSelectedProblem(user);
    }

    const closeModal = () => {
        setSelectedProblem(null);
    }

    const showUsers = user.map((user, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
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
                        <th>Mail</th>
                        <th>Number</th>
                        <th>Problem</th>
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
                        <h2>تفاصيل الاستفسار</h2>
                        <p><strong>الاسم:</strong> {selectedProblem.name}</p>
                        <p><strong>الايميل:</strong> {selectedProblem.email}</p>
                        <p><strong>الرقم:</strong> {selectedProblem.phoneNumber}</p>
                        <p><strong>الاستفسار:</strong> {selectedProblem.problem}</p>
                    </div>
                </div>
            )}
        </div>
    )
}