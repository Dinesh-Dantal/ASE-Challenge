import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="container start-page">
      <h1 className="title">🎯 Welcome to the Quiz!</h1>
      <p className="subtitle">Test your knowledge and see your score.</p>
      <button className="start-button" onClick={() => navigate("/quiz")}>
        Start Quiz
      </button>
    </div>
  );
}
