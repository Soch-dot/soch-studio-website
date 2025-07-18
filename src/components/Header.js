// src/components/Header.js
import React from "react";
import "./Header.css"; // Keep this import for other header styles

export default function Header() {
  return (
    <header className="hero">
      {/* This div will act as the background image container.
        We use an inline style to set the background image directly.
        process.env.PUBLIC_URL is the correct way to reference assets 
        from the public folder in Create React App.
        IMPORTANT: The space in "NEW VERSION.jpg" is replaced by "%20" for URL encoding.
      */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/NEW%20VERSION.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1, // This div is the lowest layer (background image)
        }}
      ></div>

      {/* This div will act as the semi-transparent overlay.
        It sits directly on top of the background image.
        Adjusted rgba values for a darker fade:
        - rgba(0, 0, 0, 0.5) from 0.3 (start of gradient)
        - rgba(0, 0, 0, 0.8) from 0.7 (end of gradient)
        This will make the background image more subtle and text more prominent.
      */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))`, // Adjusted gradient for more fade
          zIndex: 2, // This div is above the image but below the text
        }}
      ></div>

      {/* The hero-text content with your title and tagline.
        It has a higher z-index to ensure it's visible on top of both the image and overlay.
      */}
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
