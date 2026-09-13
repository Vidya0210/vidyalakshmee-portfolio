import "./Skills.css";

const skillGroups = [
  {
    title: "Programming",
    icon: "⌘",
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "AI & Data",
    icon: "◉",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Pandas",
      "NumPy",
      "Data Analysis"
    ]
  },
  {
    title: "Web Development",
    icon: "</>",
    skills: [
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Responsive Design"
    ]
  },
  {
    title: "Cybersecurity",
    icon: "◈",
    skills: [
      "SIEM",
      "Security Monitoring",
      "Network Security",
      "Cybersecurity Fundamentals"
    ]
  },
  {
    title: "Cloud & Tools",
    icon: "☁",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "VS Code",
      "Streamlit"
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-container">

        <div className="section-heading">
          <span>02</span>
          <p>TECHNICAL SKILLS</p>
        </div>

        <div className="skills-intro">
          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

          <p>
            A growing technical toolkit focused on software development,
            artificial intelligence, data and cybersecurity.
          </p>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-card-header">
                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;