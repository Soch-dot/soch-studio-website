export default function Featured() {
  return (
    <section id="featured">
      <h2 className="section-title">FEATURED WORK</h2>
      <div className="portfolio">
        <article>
          <img src="images/pic01.jpg" alt="Demo 1" />
          <div className="content">
            <h3>Demo 1</h3>
            <p>Business Explainer – Startup Habit</p>
          </div>
        </article>
        <article>
          <img src="images/pic02.jpg" alt="Demo 2" />
          <div className="content">
            <h3>Demo 2</h3>
            <p>YouTube Short – Story-based Learning</p>
          </div>
        </article>
        <article>
          <img src="images/pic03.jpg" alt="Demo 3" />
          <div className="content">
            <h3>Demo 3</h3>
            <p>Brand Intro – Minimal Voiceover Style</p>
          </div>
        </article>
      </div>
    </section>
  );
}
