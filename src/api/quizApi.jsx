import axios from "axios";

const API_URL = "http://localhost:8080/api"; // Update with your backend API URL

export const fetchQuiz = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quiz details");
  }
};
