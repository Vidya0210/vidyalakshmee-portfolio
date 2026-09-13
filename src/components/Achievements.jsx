import "./Achievements.css";

const achievements = [
  {
    icon: "🎓",
    number: "01",
    title: "Strong Academic Performance",
    description:
      "Maintaining strong academic performance throughout my Computer Science Engineering journey.",
    value: "80.21%"
  },
  {
    icon: "🤖",
    number: "02",
    title: "AI & GenAI Projects",
    description:
      "Built practical projects using Artificial Intelligence, Generative AI and data analysis.",
    value: "05+"
  },
  {
    icon: "🛡️",
    number: "03",
    title: "Cybersecurity Learning",
    description:
      "Developed cybersecurity knowledge through projects, learning and professional job simulations.",
    value: "01+"
  },
  {
    icon: "📜",
    number: "04",
    title: "Professional Certifications",
    description:
      "Completed multiple certifications and industry-oriented learning experiences.",
    value: "06+"
  }
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">

      <div className="section-container">

        <div className="section-heading">
          <span>07</span>
          <p>ACHIEVEMENTS</p>
        </div>

        <div className="achievements-intro">
          <h2>
            Milestones &
            <span> achievements.</span>
          </h2>

          <p>
            A snapshot of my academic progress, technical projects
            and continuous learning journey.
          </p>
        </div>

        <div className="achievements-grid">

          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement.number}
            >

              <div className="achievement-top">
                <span className="achievement-number">
                  {achievement.number}
                </span>

                <span className="achievement-icon">
                  {achievement.icon}
                </span>
              </div>

              <strong className="achievement-value">
                {achievement.value}
              </strong>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;