import { useContext} from "react"
import Button from "../../../../components/button/button"
import { QuizContext } from "../../context/quiz-context"
import Timer from "../timer/timer"
import "./footer.css"



const Footer = ()=>{
    const {dispatch, selectedOption, index, questions,} = useContext(QuizContext);

    const handleNextButton =()=>{
        if(index < questions.length-1){
            dispatch({type: "NEXT_QUESTION"});
        }else{
            
            dispatch({type: "FINISH"})

        }   
    }
    return(
        <div className = 'quiz-footer'>
            <Timer/>
            {selectedOption !== null && 
            <Button 
                onClick={handleNextButton}
                className = "btn next-btn">
                
                <span> {index < questions.length-1? "Next": "Finish"} 
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </Button>}
        </div>
    )
}

export default Footer;



