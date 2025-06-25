// src/components/Header.js
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="soch">Soch</span>{" "}
          <span className="studio">STUDIO</span>
        </h1>
        <p>Turning ideas into unforgettable visuals.</p>
      </div>
    </header>
  );
}
