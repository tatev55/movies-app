import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./timer.css"

const Timer = ()=> {

    const { questions, dispatch } = useContext(QuizContext);
    const [time, setTime] = useState(questions.length * 60);

    useEffect(()=> {
        if(time <= 0){
            dispatch({type: "FINISH"});
            return
        }

        const interval = setInterval(()=> {
            setTime((prevTime) => prevTime-1);
        }, 1000)

        return(() => clearInterval(interval))
    }, [time, dispatch])

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    
    
    return(
        <div className="timer-container"><p className = "timer">{formattedTime}</p></div>
    )
}

export default Timer;