import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No results found.</p>;

  return (
    <div className="container result-page">
      <h1 className="title">🎉 Quiz Completed!</h1>
      <p className="score">
        Your Score: <strong>{state.score}</strong> / {state.total}
      </p>
      <h2>Details:</h2>
      <ul className="result-list">
        {state.results.map((r, i) => (
          <li key={i} className={r.isCorrect ? "correct" : "wrong"}>
            Question {r.questionId}: {r.isCorrect ? "✅ Correct" : "❌ Wrong"}
          </li>
        ))}
      </ul>
      <button className="start-button" onClick={() => navigate("/")}>
        Take Quiz Again
      </button>
    </div>
  );
}
