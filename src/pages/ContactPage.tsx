import Contact from "../components/Contact";

const ContactPage = () => {
    return (
        <div className="page-wrapper container1" style={{ paddingTop: '150px', paddingBottom: '100px', height: 'auto', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Contact />
        </div>
    );
};

export default ContactPage;
