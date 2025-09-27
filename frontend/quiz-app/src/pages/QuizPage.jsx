import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { fetchQuestions, submitAnswers } from "../api/api";

export default function QuizPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions()
      .then((data) => {
        console.log("Questions fetched:", data);
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setError("Failed to load questions.");
        setLoading(false);
      });
  }, []);

  const handleSelect = (optionId) => {
    setAnswers({ ...answers, [questions[current].id]: optionId });
  };

  const handleNext = () => setCurrent((prev) => prev + 1);
  const handlePrev = () => setCurrent((prev) => prev - 1);

  const handleSubmit = async () => {
    const payload = Object.entries(answers).map(([questionId, optionId]) => ({
      questionId: parseInt(questionId),
      optionId,
    }));
    try {
      const result = await submitAnswers(payload);
      navigate("/result", { state: result });
    } catch (err) {
      console.log(err);
      setError("Failed to submit answers.");
    }
  };

  if (loading) return <div className="container">Loading questions...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="container quiz-page">
      <Question
        question={questions[current]}
        selectedOption={answers[questions[current].id]}
        onSelect={handleSelect}
      />
      <div className="navigation">
        {current > 0 && <button className="nav-button" onClick={handlePrev}>Previous</button>}
        {current < questions.length - 1 && <button className="nav-button" onClick={handleNext}>Next</button>}
        {current === questions.length - 1 && <button className="submit-button" onClick={handleSubmit}>Submit</button>}
      </div>
      <p className="progress">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
}
