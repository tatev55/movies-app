import { useContext } from "react";
import { QuizContext } from "../../../context/quiz-context";
import Button from "../../../../../components/button/button"
import { Loading } from "../../../../../components/loading/loading";
import "./option.css"

const Option = ({options})=> {
    const {dispatch, selectedOption, questions, index} = useContext(QuizContext);
    const correctOption = questions[index].correctOption;



    if(!options){
        return <Loading/>
    }

    const handleSelectOption = (index)=>{
        dispatch({type: 'SELECT_OPTION', payload: index})
    }
    
    return (
        <div className = "options-container">
            {options.map((option, index) =>{
               const className = selectedOption !== null
               ? index === correctOption
                 ? "correct"
                 : "inCorrect"
               : "";
                return (
                    <Button key={option} 
                        className = {`btn-option ${className}`}
                        onClick = {() => handleSelectOption(index)}
                        >{option}
                    </Button>
                )
            })}
            
        </div>
    )
    
}

export default Option