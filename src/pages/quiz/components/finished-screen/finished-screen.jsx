import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import Button from "../../../../components/button/button";

import "./finished-screen.css"

const FinishScreen = ()=>{
    const {questions, score, maxScore, dispatch, correctAnswers, wrongAnswers} = useContext(QuizContext);


    const handleStartAgain =()=>{
        dispatch({type: "START_AGAIN"})
    }

    const handleCloseFinishedScreen = ()=>{
        dispatch({type: "CLOSE_FINISH_SCREEN"});
    }

    const getEmojiIcon = (score) => {
        if (score === 100) {
            return "Perfect! 🏆";
        } else if (score >= 80) {
            return "Well Done! 🎉";
        } else if (score >= 50) {
            return "Okay 😐";
        } else if (score > 0) {
            return "Better luck next time 🤞";
        } else {
            return "";
        }
    }


    return(
        <div className="finish-screen">
            <div className = 'result-container'>
                <div className = "circle-box">
                    {score}%<span>of {maxScore}%</span>
                </div>
                <h2 className = "result-text">{getEmojiIcon(score)}</h2>
                <span className = "info-text">You scored higher than 65% of the people who have taken these tests</span>
            </div>
            <div className="summery-container">
                <h2 className = "summery-title">Summary</h2>
                <p className = "summery-text">Number of questions 
                    <strong>{questions.length}</strong>
                </p>
                <p className = "summery-text">Number of correct answers
                    <strong>{correctAnswers}</strong>
                </p>
                <p className = "summery-text">Number of wrong answers
                    <strong>{wrongAnswers}</strong>
                </p>
                <Button className = "btn-start-again"
                    onClick={handleStartAgain}>
                    Start Again
                </Button>
            </div>
            <Button className = 'close-finished-screen'
                onClick={handleCloseFinishedScreen}>
                <i className="fas fa-times"></i>
            </Button>
        </div>
    )
}

export default FinishScreen;

