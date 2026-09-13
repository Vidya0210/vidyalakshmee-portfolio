import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Interview Coach",
    description:
      "An AI-powered interview preparation platform that helps users practice technical and HR interviews, evaluate answers and receive intelligent feedback.",
    features: [
      "AI-generated interview questions",
      "Technical & HR interview practice",
      "Answer evaluation",
      "Personalized feedback",
      "Interview scoring"
    ],
    technologies: ["Python", "AI", "GenAI", "Web"],
    icon: "🤖",

    github: "",
    demo: ""
  },

  {
    number: "02",
    category: "GENERATIVE AI • DATA",
    title: "GenAI Dataset Quality Advisor",
    description:
      "A GenAI-powered application that analyzes uploaded datasets and identifies data-quality issues while providing recommendations for improvement.",
    features: [
      "CSV & Excel upload",
      "Missing-value detection",
      "Duplicate detection",
      "Outlier analysis",
      "AI recommendations"
    ],
    technologies: ["Python", "Pandas", "GenAI", "Streamlit"],
    icon: "🧠",

    github: "",
    demo: ""
  },

  {
    number: "03",
    category: "CYBERSECURITY",
    title: "SIEM Dashboard",
    description:
      "A centralized security monitoring dashboard designed to visualize security events, analyze logs and help identify potential threats.",
    features: [
      "Security event monitoring",
      "Threat visualization",
      "Alert management",
      "Log analysis",
      "Security metrics"
    ],
    technologies: ["Python", "Cybersecurity", "SIEM", "Dashboard"],
    icon: "🛡️",

    github: "",
    demo: ""
  },

  {
    number: "04",
    category: "SPACE TECHNOLOGY",
    title: "Deep Space Communication Simulator",
    description:
      "A simulation platform designed to demonstrate deep-space communication concepts, signal transmission and communication analysis.",
    features: [
      "Signal simulation",
      "Data transmission",
      "Communication analysis",
      "Signal visualization",
      "Space communication concepts"
    ],
    technologies: ["Python", "Simulation", "Visualization"],
    icon: "🚀",

    github: "",
    demo: ""
  },

  {
    number: "05",
    category: "GENERATIVE AI",
    title: "GenAI Dataset Advisor",
    description:
      "An intelligent data assistant that helps users understand datasets and provides AI-powered suggestions for improving data quality and usability.",
    features: [
      "Dataset analysis",
      "Data-quality insights",
      "AI-powered suggestions",
      "Data understanding",
      "Improvement recommendations"
    ],
    technologies: ["Python", "GenAI", "Data Science", "AI"],
    icon: "📊",

    github: "",
    demo: ""
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-container">

        <div className="section-heading">
          <span>03</span>
          <p>FEATURED PROJECTS</p>
        </div>

        <div className="projects-intro">
          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A collection of projects focused on artificial intelligence,
            Generative AI, cybersecurity, data and software development.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-icon">
                  {project.icon}
                </span>

              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-features">
                {project.features.map((feature, index) => (
                  <div key={index}>
                    <span>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button primary"
                  >
                    GitHub ↗
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button secondary"
                    >
                      Live Demo ↗
                      </a>
                    )}
                    </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;