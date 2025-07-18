    // src/components/About.js
    import React from "react";

    export default function About() {
      return (
        <section id="about" className="p-8 text-center max-w-2xl mx-auto">
          <h2 className="section-title text-3xl font-bold mb-4" data-aos="fade-up">About Us</h2>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
            We’re Soch Studio — a two-person creative team driven by a passion for visual storytelling.
          </p>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
            One of us is a video editor & video creator, the other is a scriptwriter — and together, we take ideas and turn them into engaging videos and designs.
          </p>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="300">
            We may be small, but we care a lot about every detail. Whether it's a short video, a visual, or any other creative project, we put our hearts into making sure it looks and feels right.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Our goal is simple: to help you tell your story in a way that connects with people. Let’s make something awesome together!
          </p>
          <div className="about-team mt-8 flex justify-center space-x-12 text-center">
            <div data-aos="fade-right" data-aos-delay="500">
              <h3 className="text-xl font-semibold">Sumedh</h3>
              <p>Video Editor & Founder</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
              <h3 className="text-xl font-semibold">Hritik</h3>
              <p>Scriptwriter & Concept Artist</p>
            </div>
          </div>
        </section>
      );
    }
    