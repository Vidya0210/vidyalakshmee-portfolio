import "./Education.css";

const education = [
  {
    year: "4th Year",
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Government Engineering College, Hassan",
    description:
      "Currently pursuing Bachelor of Engineering in Computer Science Engineering with a focus on Artificial Intelligence, Generative AI, Web Development, Data Science and Cybersecurity.",
    percentage: "80.21%",
    cgpa: "7.77 CGPA"
  },
  {
    year: "PUC",
    degree: "Pre-University Course",
    field: "Higher Secondary Education",
    institution: "SSPU College, Chadachan",
    description:
      "Completed Pre-University Course with a strong academic performance.",
    percentage: "89%"
  },
  {
    year: "10th",
    degree: "Secondary Education",
    field: "School Education",
    institution: "Secondary School",
    description:
      "Completed secondary education with strong academic performance.",
    percentage: "92%"
  }
];

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-container">

        <div className="section-heading">
          <span>05</span>
          <p>EDUCATION</p>
        </div>

        <div className="education-intro">
          <h2>
            Academic
            <span> background.</span>
          </h2>

          <p>
            My academic journey and the foundation behind my technical
            knowledge and skills.
          </p>
        </div>

        <div className="education-grid">

          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-icon">
                🎓
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.field}</h4>

              <p className="institution">
                {item.institution}
              </p>

              <p className="education-description">
                {item.description}
              </p>

              <div className="education-results">

                <div>
                  <span>Percentage</span>
                  <strong>{item.percentage}</strong>
                </div>

                {item.cgpa && (
                  <div>
                    <span>CGPA</span>
                    <strong>{item.cgpa}</strong>
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;