import React from "react";
import "./ProcessBar.css";

const ProcessBar = ({ steps, currentStep }) => {
  return (
    <div className="process-status-bar">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        let stepStatus = "";
        if (stepNumber < currentStep) stepStatus = "completed";
        else if (stepNumber === currentStep) stepStatus = "active";

        return (
          <React.Fragment key={index}>
            <div className={`process-step ${stepStatus}`}>
              <div className="step-icon">{stepNumber}</div>
              <div className="step-label">{step}</div>
            </div>
            {index !== steps.length - 1 && <div className="step-divider" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProcessBar;