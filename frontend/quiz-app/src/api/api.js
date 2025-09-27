import axios from "axios";

export const API_ROOT = "http://localhost:5000/api";

export const fetchQuestions = async () => {
  const res = await axios.get(`${API_ROOT}/quiz`);
  return res.data;
};

export const submitAnswers = async (answers) => {
  const res = await axios.post(`${API_ROOT}/quiz/submit`, { answers });
  return res.data;
};

export const seedDatabase = async () => {
  const res = await axios.get(`${API_ROOT}/seed`);
  return res.data;
};
