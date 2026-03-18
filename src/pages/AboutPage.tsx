import About from "../components/About";
import WhatIDoCards from "../components/WhatIDoCards";
import TechStack from "../components/TechStack";

const AboutPage = () => {
    return (
        <div className="page-wrapper container1" style={{ paddingTop: '120px', height: 'auto', minHeight: '100vh' }}>
            <About />
            <WhatIDoCards />
            <div style={{ marginTop: '100px' }}>
                <TechStack />
            </div>
        </div>
    );
};

export default AboutPage;
