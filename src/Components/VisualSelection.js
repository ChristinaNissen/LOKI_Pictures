import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Voting-system.css";
import "./VisualSelection.css"

// Static data for each type
const wordsList = ["sheep", "tree", "moon", "star", "river", "cloud", "flower", "sun", "bird", "rock"];
const emojisList = ["🌟", "🍀", "🔥", "🎈", "🌸", "⚡", "🍎", "🍌", "🍇", "🍉"];
const patternsList = Array.from({ length: 10 }).map(
  () => ["#20c997", "#17a2b8"]
);

// Change this to "words", "card", "images", or "patterns" for static selection type
const visualType = "card";

const VisualSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  // Determine items to display
  let items = [];
  if (visualType === "words") items = wordsList;
  if (visualType === "card") items = emojisList;
  if (visualType === "images") items = wordsList;
  if (visualType === "patterns") items = patternsList;

  const handleSelect = (idx) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      navigate("/voting");
    } else {
      alert("Please select one item to continue");
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="welcome-main">

				<h1>Identifaction of previously cast ballots</h1>
				<div className="welcome-desc">
Please select all items below that you have seen when casting your previous ballots.				</div>

        <div className="card" style={{ maxWidth: 700, width: "100%" }}>
          <div className="visual-selection-grid">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`visual-selection-item${selected.includes(idx) ? " selected" : ""}`}
                onClick={() => handleSelect(idx)}
              >
                {visualType === "words" && <span>{item}</span>}
                {visualType === "card" && <span>{item}</span>}
                {visualType === "images" && (
                  <img
                    src={`https://via.placeholder.com/60?text=${item}`}
                    alt="visual"
                    style={{ borderRadius: "8px" }}
                  />
                )}
                {visualType === "patterns" && <span>Pattern</span>}
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="button"
            style={{ marginTop: "30px" }}
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisualSelection;
