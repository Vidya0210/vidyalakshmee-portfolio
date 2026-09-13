import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-container">

        <div className="resume-box">

          <div className="resume-content">

            <span className="resume-label">
              MY RESUME
            </span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              Explore my education, technical skills, certifications,
              projects and learning journey through my resume.
            </p>

            <div className="resume-buttons">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-primary"
              >
                View Resume ↗
              </a>

              <a
                href="/resume.pdf"
                download
                className="resume-secondary"
              >
                Download Resume ↓
              </a>

            </div>

          </div>

          <div className="resume-icon">
            <div className="document">
              <span>CV</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;