import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import Button from "../../../../components/button/button";

import "./finished-screen.css"

const FinishScreen = ()=>{
    const {questions, score, dispatch} = useContext(QuizContext);


    const handleStartAgain =()=>{
        dispatch({type: "START_AGAIN"})
    }

    const handleCloseFinishedScreen = ()=>{
        dispatch({type: "CLOSE_FINISH_SCREEN"});
    }


    return(
        <div className="finish-screen">
            <div className = 'result-container'>
                <div className = "circle-box">
                    {score}<span>of {questions.length * 10}</span>
                </div>
                <h2 className = "result-text">{score < 20? "Bad!": "Great!"}</h2>
                <span>You scored higher than 65% of the people who have taken these tests</span>
            </div>
            <div className="summery-container">
                <h2 className = "summery-title">Summary</h2>
                <p className = "summery-text">Number of questions 
                    <strong>{questions.length}</strong>
                </p>
                <p className = "summery-text">Number of correct answers
                    <strong>{score/ 10}</strong>
                </p>
                <p className = "summery-text">Number of wrong answers
                    <strong>{questions.length - (score /10)}</strong>
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

