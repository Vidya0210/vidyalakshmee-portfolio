import "./Certifications.css";

const certifications = [
  {
    number: "01",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata • Forage",
    category: "CYBERSECURITY",
    date: "August 25, 2025",
    icon: "🛡️",
    file: "/certificates/tata-cybersecurity.pdf"
  },

  {
    number: "02",
    title: "Industrial Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "CYBERSECURITY",
    date: "April 2, 2026",
    icon: "🔐",
    file: "/certificates/industrial-cybersecurity.pdf"
  },

  {
    number: "03",
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan • Forage",
    category: "SOFTWARE ENGINEERING",
    date: "August 26, 2025",
    icon: "💻",
    file: "/certificates/jpmorgan-software-engineering.pdf"
  },

  {
    number: "04",
    title: "Career Edge - Young Professional",
    issuer: "TCS iON",
    category: "PROFESSIONAL DEVELOPMENT",
    date: "September 9, 2026",
    icon: "🎓",
    file: "/certificates/tcs-career-edge.pdf"
  },

  // Add more certificates below this line

  {
    number: "05",
    title: "Python Course Completion",
    issuer: "IntrnForte",
    category: "PROGRAMMING",
    date: "2025",
    icon: "🐍",
    file: "/certificates/python.pdf"
  },

  {
    number: "06",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IntrnForte",
    category: "ARTIFICIAL INTELLIGENCE Course Completion",
    date: "2025",
    icon: "🤖",
    file: "/certificates/ai.pdf"
  },

  {
    number: "07",
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "AWS • Forage",
    category: "CLOUD",
    date: "2025",
    icon: "☁️",
    file: "/certificates/aws-solutions-architecture.pdf"
  },

  {
    number: "08",
    title: "Data Science vs Machine Learning vs AI",
    issuer: "Certification",
    category: "DATA & AI",
    date: "2025",
    icon: "📊",
    file: "/certificates/data-science-ml-ai.pdf"
  }
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span>06</span>
          <p>CERTIFICATIONS</p>
        </div>

        {/* Introduction */}
        <div className="certifications-intro">

          <h2>
            Learning never
            <span> stops.</span>
          </h2>

          <p>
            Certifications and professional learning experiences that
            strengthen my technical knowledge and industry readiness.
          </p>

        </div>

        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((certificate) => (

            <article
              className="certificate-card"
              key={certificate.number}
            >

              {/* Top */}
              <div className="certificate-top">

                <span className="certificate-number">
                  {certificate.number}
                </span>

                <span className="certificate-icon">
                  {certificate.icon}
                </span>

              </div>

              {/* Category */}
              <p className="certificate-category">
                {certificate.category}
              </p>

              {/* Title */}
              <h3>
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              {/* Date */}
              <p className="certificate-date">
                {certificate.date}
              </p>

              {/* Button */}
              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="certificate-button"
              >
                View Certificate
                <span>↗</span>
              </a>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;