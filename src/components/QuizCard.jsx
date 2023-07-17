import React, { useState, useEffect } from "react";
import { fetchQuiz } from "../api/quizApi";
import "../assets/QuizCard.css";

const QuizCard = ({ quizId }) => {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const quizData = await fetchQuiz();
        setQuiz(quizData);
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };

    fetchQuizDetails();
  }, [quizId]);

  if (!quiz) {
    return <div className="quiz-card">Loading...</div>;
  }

  console.log(quiz);

  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <p>Difficulty: {quiz.difficulty}</p>
      {/* Add additional quiz details as needed */}
    </div>
  );
};

export default QuizCard;
