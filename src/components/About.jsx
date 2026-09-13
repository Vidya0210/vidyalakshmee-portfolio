import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <span>01</span>
          <p>ABOUT ME</p>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <h2>
              Turning ideas into
              <span> intelligent solutions.</span>
            </h2>

            <p>
              I am a B.Tech Computer Science Engineering student passionate
              about building practical and innovative technology solutions.
              My interests include Artificial Intelligence, Generative AI,
              Web Development, Data Science and Cybersecurity.
            </p>

            <p>
              I enjoy learning new technologies and transforming ideas into
              functional applications. My projects focus on solving real-world
              problems using modern software and AI technologies.
            </p>

            <a href="#projects" className="about-button">
              Explore My Work →
            </a>
          </div>

          <div className="about-cards">

            <div className="info-card">
              <div className="info-icon">🎓</div>
              <h3>Computer Science</h3>
              <p>B.Tech CSE Student</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🤖</div>
              <h3>Artificial Intelligence</h3>
              <p>AI & Generative AI</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💻</div>
              <h3>Development</h3>
              <p>Web & Application Development</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🛡️</div>
              <h3>Cybersecurity</h3>
              <p>Security & Monitoring</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;