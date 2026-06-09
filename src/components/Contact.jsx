import {
  FiMail,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiDownload,
  FiSend,
} from "react-icons/fi";

import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="contact-label">CONTACT</p>

        <h2 className="contact-heading">Let's build something that lasts.</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-description">
              Open to leadership conversations, advisory engagements, and
              meaningful collaborations in packaging development and SCM.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>

                <div>
                  <span>EMAIL</span>
                  <h4>rskraajesh@gmail.com</h4>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiLinkedin />
                </div>

                <div>
                  <span>LINKEDIN</span>
                  <h4>linkedin.com/in/rajesh-subramanian-5ab746166/</h4>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span>LOCATION</span>
                  <h4>Chennai, India</h4>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>PHONE</span>
                  <h4>9841358284</h4>
                </div>
              </div>
            </div>

            <a
              href="/resume/Rajesh_Subramanian_Resume.pdf"
              className="resume-btn"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          <div className="contact-form-card">
            <form>
              <div className="input-row">
                <div>
                  <label>Name</label>

                  <input type="text" placeholder="Your full name" />
                </div>

                <div>
                  <label>Email</label>

                  <input type="email" placeholder="you@company.com" />
                </div>
              </div>
              <br></br>
              <div>
                <label>Message</label>

                <textarea rows="8" placeholder="How can I help?" />
              </div>

              <button type="submit" className="send-btn">
                <FiSend />
                Send Message
              </button>

              <p className="privacy-note">
                Your details stay private — never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
