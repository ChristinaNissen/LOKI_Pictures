import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrivateModeWarning.css";
import Footer from "./Footer";
import "./Voting-system.css";


const PrivateModeWarning = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // User confirms they've enabled private browsing
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <main className="welcome-main">
        <h1>Private Browsing Recommended</h1>
        <p className="text-main">See below how to enable private browsing mode when using the voting platform.</p>

        <div className="security-box">
          <p className="text-small">
           <strong>Security Feature:</strong><br/>
          For your security and privacy, please use your browser's private (incognito)
          browsing mode when using the voting platform. This ensures that your session is
          protected and your browsing data is not retained.
          </p>
        </div>
        <div className="card">
          <h2 style={{ width: "100%", textAlign: "left", margin: "0 0 10px 0px" }}>
            How to Enable Private Browsing
          </h2>
          <p className="text-small">
            <strong>How to enable private mode:</strong>
            <br />
            <span>Chrome/Safari: Cmd+Shift+N</span>
            <br />
            <span>Firefox: Cmd+Shift+P</span>
          </p>
          <p>
            Alternatively, right‑click the button below and choose "Open link in new private
            window" if your browser supports it.
          </p>
        </div>
          <button className="button" onClick={handleContinue}>
            Login
          </button>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateModeWarning;