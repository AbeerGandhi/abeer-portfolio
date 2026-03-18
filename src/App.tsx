import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import { smoother } from "./components/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (smoother) {
      smoother.scrollTop(0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </LoadingProvider>
  );
};

export default App;
