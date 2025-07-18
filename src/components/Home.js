// src/components/Home.js
import React from "react"; // No need to import useEffect or AOS here, as it's initialized in App.js

export default function Home() {
  return (
    <section id="home" className="text-center p-8">
      {/* Add data-aos attributes to elements you want to animate */}
      <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Soch Studio — Two creators bringing your ideas to life.
      </h2>
      <p className="text-lg mb-2" data-aos="fade-up" data-aos-delay="100">
        Audio, video, design — we turn your vision into a powerful story.
      </p>
      <p className="text-lg mb-2" data-aos="fade-up" data-aos-delay="200">
        We help creators, startups, and educators craft engaging videos.
      </p>
      <p className="text-lg" data-aos="fade-up" data-aos-delay="300">Based in India, working globally.</p>
    </section>
  );
}
