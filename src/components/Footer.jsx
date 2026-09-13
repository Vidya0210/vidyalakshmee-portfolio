import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>&lt;</span>VB<span>/&gt;</span>
          </a>

          <p>
            Computer Science Engineer building intelligent solutions
            with AI, GenAI, Web Development and Cybersecurity.
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Vidyalakshmee. All Rights Reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;