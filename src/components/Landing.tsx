import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        {children}
        <div className="landing-container">
          <div className="landing-intro">
            <h2 className="hello-text">Hello! I'm</h2>
            <h1 className="name-text">
              ABEER <span className="name-last">GANDHI</span>
            </h1>

            <div className="landing-roles">
              <h3 className="role-prefix">I am a</h3>
              <div className="role-main">
                <div className="landing-h2-1">AI / ML Engineer</div>
                <div className="landing-h2-2">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
