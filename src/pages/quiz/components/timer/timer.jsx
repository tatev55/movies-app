import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./timer.css"

const Timer = ()=> {

    const { gameTime, dispatch } = useContext(QuizContext);


    useEffect(()=> {
        if(gameTime <= 0){
            dispatch({type: "FINISH"});
            return
        }

        const interval = setInterval(()=> {
            dispatch({type: "TIME"})
        }, 1000)

        return(() => clearInterval(interval))
    }, [gameTime, dispatch])

    const minutes = Math.floor( gameTime/ 60);
    const seconds = gameTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    
    
    return(
        <div className="timer-container"><p className = "timer">{formattedTime}</p></div>
    )
}

export default Timer;