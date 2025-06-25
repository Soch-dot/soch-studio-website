export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">ABOUT US</h2>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
        We’re a two-person creative studio, driven by a passion for visual storytelling.
      </p>
      <div className="about-team" style={{ marginTop: "2rem" }}>
        <div>
          <h3>Sumedh</h3>
          <p>Video Editor & Founder</p>
        </div>
        <div>
          <h3>Hritik</h3>
          <p>Scriptwriter & Concept Artist</p>
        </div>
      </div>
    </section>
  );
}
