import {useContext} from "react";
import { QuizContext } from "../../context/quiz-context";
import Option from "./options/option"
import "./question.css"
import { Loading } from "../../../../components/loading/loading";

const Questions = ()=>{
    const {questions, index} = useContext(QuizContext);
    const questionText = questions[index];
    
   
    if(!questionText){
        return <Loading/>
    }
    

    return (
        <div>
            <h2 className = "question">{questionText.question}</h2>
            <Option options = {questionText.options}/>
        </div>
    )
}

export default Questions;