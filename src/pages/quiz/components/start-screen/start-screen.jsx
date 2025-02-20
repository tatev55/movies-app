import { useContext } from "react";
import Button from "../../../../components/button/button"
import { QuizContext } from "../../context/quiz-context";

import "./start-screen.css";

export const StartScreen = () => {
  const { questions, dispatch } = useContext(QuizContext);
  const numberOfQuestions = questions.length;

  return (
    <div className="start">
      <h2>Welcome to The Movie Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your movie knowledge skills</h3>
      <Button
        className="btn"
        onClick={() => dispatch({ type: "START" })}
      >
        Let's start
      </Button>
    </div>
  );
};



