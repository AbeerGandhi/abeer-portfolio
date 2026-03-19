import WorkCards from "../components/WorkCards";
import { useEffect } from "react";
import { initialFX } from "../components/utils/initialFX";

const WorkPage = () => {
    useEffect(() => {
        initialFX();
    }, []);

    return (
        <div className="page-wrapper container1" style={{ paddingTop: '80px', height: 'auto', minHeight: '100vh' }}>
            <WorkCards />
        </div>
    );
};

export default WorkPage;
