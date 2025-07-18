    // src/components/Services.js
    import React from "react";

    export default function Services() {
      return (
        <section id="services">
          <h2 className="section-title" data-aos="fade-up">WHAT WE DO</h2>
          <div className="services-grid">
            <div data-aos="fade-right" data-aos-delay="100">Scriptwriting (YT, Ads, Brands)</div>
            <div data-aos="fade-right" data-aos-delay="200">Video Editing (Reels, Shorts, VOs)</div>
            <div data-aos="fade-left" data-aos-delay="300">Creative Concept Development</div>
            <div data-aos="fade-left" data-aos-delay="400">Voiceover & Stock Footage Integration</div>
            <div data-aos="fade-up" data-aos-delay="500">Subtitles & Motion Design</div>
          </div>
        </section>
      );
    }
    