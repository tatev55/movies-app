import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./progress.css"


const Progress = ()=>{
    const { questions, index, score,maxScore, selectedOption} = useContext(QuizContext)
    
    return (
        <div className = "progress-quiz">
            <p className = "number-questions">
                <strong>Questions </strong>
                {index + 1 } / {questions.length}
            </p>

            <progress
                max = {questions.length}
                value = {index + Number(selectedOption != null)}>
            </progress>
            
            <p className = "points">
                <strong>Quiz-score </strong>
                {score} / {maxScore}
            </p>
        </div>
        
       
    )
}

export default Progress;