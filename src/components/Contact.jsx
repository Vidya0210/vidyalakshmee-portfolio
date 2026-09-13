import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-container">

        <div className="section-heading">
          <span>09</span>
          <p>CONTACT</p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's connect &
              <span> create.</span>
            </h2>

            <p>
              I'm open to opportunities, internships, collaborations
              and interesting projects. Feel free to reach out.
            </p>

            <div className="contact-links">

              {/* Email */}
              <a href="mailto:vidyahabagonde@gmail.com">
                <span>✉</span>

                <div>
                  <small>Email</small>
                  <strong>
                    vidyahabagonde@gmail.com
                  </strong>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Vidya0210"
                target="_blank"
                rel="noreferrer"
              >
                <span>◉</span>

                <div>
                  <small>GitHub</small>
                  <strong>
                    github.com/Vidya0210
                  </strong>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vidyalakshmee-habagonde/"
                target="_blank"
                rel="noreferrer"
              >
                <span>in</span>

                <div>
                  <small>LinkedIn</small>
                  <strong>
                    linkedin.com/in/vidyalakshmee-habagonde
                  </strong>
                </div>
              </a>

            </div>

          </div>


          {/* Contact Form */}

          <form
            className="contact-form"
            action="https://formsubmit.co/vidyahabagonde@gmail.com"
            method="POST"
          >

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div className="form-row">

              <div className="form-group">

                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>Your Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;