import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Let's <span>Collaborate</span></h3>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <a href="mailto:abeergandhi2@gmail.com" className="contact-link" data-cursor="disable">
              abeergandhi2@gmail.com
            </a>

            <h4>Education</h4>
            <p className="contact-info-text">
              B.E. Computer Science - AI & ML <br />
              RCOEM, Nagpur
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <div className="social-links">
              <a
                href="https://github.com/AbeerGandhi"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/abeergandhi"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            
            </div>
          </div>

          <div className="contact-footer-box">
            <h2>
              Designed and <br />
              Developed by <br />
              <span>Abeer Gandhi</span>
            </h2>
            <div className="copyright-text">
              <MdCopyright /> 2026 Abeer Gandhi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
