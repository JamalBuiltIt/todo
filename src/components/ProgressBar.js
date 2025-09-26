import React from "react";

export default function ProgressBar({ total, completed }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      <span className="progress-label">{percent}% Completed</span>
    </div>
  );
}
