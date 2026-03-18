import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingContext";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [isFullyOptimized, setFullyOptimized] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Initializing systems...");

  const statusMessages = [
    "Compiling shaders...",
    "Optimizing assets...",
    "Establishing neural link...",
    "Loading textures...",
    "Synchronizing clock...",
    "System ready.",
  ];

  useEffect(() => {
    const msgIndex = Math.floor((percent / 100) * statusMessages.length);
    if (msgIndex < statusMessages.length) {
      setStatusMessage(statusMessages[msgIndex]);
    }
  }, [percent]);

  useEffect(() => {
    if (percent >= 100) {
      const timer = setTimeout(() => {
        setFullyOptimized(true);
        setTimeout(() => {
          setIsLoading(false);
          // Trigger initial animations after loading screen is gone
          import("./utils/initialFX").then((module) => {
            if (module.initialFX) {
              module.initialFX();
            }
          });
        }, 1200);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [percent]);

  return (
    <div className={`loading-overlay ${isFullyOptimized ? "loaded" : ""}`}>
      <div className="loading-grid"></div>
      <div className="loading-noise"></div>

      <div className="loading-header-nav">
        <div className="nav-logo">AG</div>
        <div className="nav-status">
          <span className="blink-dot"></span> SYSTEM ONLINE
        </div>
      </div>

      <div className="loading-main-content">
        <div className="loading-percent-wrap">
          <h1 className="loading-percent-text">{percent}</h1>
          <span className="loading-percent-symbol">%</span>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar-fill" style={{ width: `${percent}%` }}></div>
          <div className="loading-bar-glow" style={{ width: `${percent}%` }}></div>
        </div>

        <div className="loading-status-wrap">
          <p className="loading-status-text">{statusMessage}</p>
        </div>
      </div>

      <div className="loading-footer">
        <div className="footer-line"></div>
        <div className="footer-details">
          <span>PORTFOLIO OS v2.0</span>
          <span>© 2026 ABEER GANDHI</span>
        </div>
      </div>

      <div className="scan-line"></div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 8);
      percent = Math.min(50, percent + rand);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = Math.min(99, percent + Math.round(Math.random()));
        setLoading(percent);
        if (percent >= 99) {
          clearInterval(interval);
        }
      }, 400);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 5);
    });
  }
  return { loaded, percent, clear };
};
