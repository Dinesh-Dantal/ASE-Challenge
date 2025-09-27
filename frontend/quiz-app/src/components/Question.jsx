import React from "react";

export default function Question({ question, selectedOption, onSelect }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.text}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option-button ${selectedOption === option.id ? "selected" : ""}`}
            onClick={() => onSelect(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
