import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PrivateModeWarning.css";
import Footer from "./Footer";
import "./Voting-system.css";

const NoPrivateMode = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <main className="welcome-main">
        <h1>Private Browsing Recommended</h1>

        <div className="security-box-warning">
            <p>
            For the purposes of this study, please do not use private browsing or open the login in a new window or tab.
            Otherwise, your participation may not be correctly registered on Prolific.<br /><br />
            To ensure your interaction is properly registered, simply click the login button below to proceed.
          </p>
        </div>

        <div className="study-modal study-modal-static">
          <p>
            For the purposes of this study, please do not use private browsing or open the login in a new window or tab.<br /><br />
            To ensure your interaction is properly registered, simply click the login button below to proceed.
          </p>
          <div className="study-modal-actions">
            <button style={{ fontWeight: "bold" }} className="study-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoPrivateMode;