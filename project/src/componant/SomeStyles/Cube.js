import React from 'react';
import "./Cube.css";

export default function Cube() {
  return (
    <div className="containercube" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="cube">
        <div className="divcube" style={{ '--x': -1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 0, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
      </div>
      <div className="cube">
        <div className="divcube" style={{ '--x': -1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 0, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
      </div>
      <div className="cube">
        <div className="divcube" style={{ '--x': -1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 0, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
        <div className="divcube" style={{ '--x': 1, '--y': 0 }}>
          <span className="spancube" style={{ '--i': 3 }}></span>
          <span className="spancube" style={{ '--i': 2 }}></span>
          <span className="spancube" style={{ '--i': 1 }}></span>
        </div>
      </div>
    </div>
  );
}
