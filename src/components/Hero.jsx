import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Vidyalakshmee
            <span> Beerappa</span>
          </h1>

          <h2>
            Computer Science Engineer
          </h2>

          <p className="hero-description">
            Building intelligent and innovative solutions with
            Artificial Intelligence, Generative AI, Web Development
            and Cybersecurity.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Projects →
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>

          </div>

          <div className="hero-tags">
            <span>AI</span>
            <span>GENAI</span>
            <span>WEB DEVELOPMENT</span>
            <span>CYBERSECURITY</span>
          </div>

        </div>

        <div className="hero-visual">

          <div className="ai-card">

            <div className="card-top">
              <span className="status-dot"></span>
              AI SYSTEM ONLINE
            </div>

            <div className="brain">
              AI
            </div>

            <div className="code-lines">
              <div>01 &nbsp; intelligence.init()</div>
              <div>02 &nbsp; model.predict()</div>
              <div>03 &nbsp; data.analyze()</div>
              <div>04 &nbsp; system.secure()</div>
            </div>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div>↓</div>
      </div>

    </section>
  );
}

export default Hero;