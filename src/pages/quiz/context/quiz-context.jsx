import { createContext, useReducer } from "react";


const QuizContext = createContext();

const initialState = {
  // status => loading, active, ready, error, finished
  status: "loading",
  questions: [],
  index: 0,
  selectedOption: null,
  score: 0,
  maxScore: 0,
  gameTime: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        maxScore:  action.payload.reduce((prev, cur) => {
          return prev + cur.points
        }, 0)
      };

    case "DATA_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "START":
      return {
        ...state,
        status: "active",
        gameTime: state.questions.length * 30,
      };
    case "SELECT_OPTION":
      const question = state.questions[state.index];
      
      
      return {
        ...state,
        selectedOption: action.payload,
        score: action.payload === question.correctOption? state.score + question.points: state.score
        
      }
    case "NEXT_QUESTION":
      return {
        ...state,
        index: state.index + 1,
        selectedOption: null
      }
    case "START_AGAIN":
      return {
        ...state,
        index: 0,
        selectedOption: null,
        score: 0,
        status: "active",
        gameTime: state.questions.length * 30,
      }
      case "FINISH":
        const correctAnswers = state.score / state.questions.length;
        const wrongAnswers = state.questions.length - correctAnswers;
        return {
          ...state,
          status: "finished",
          maxScore: state.questions.reduce((prev, cur) => {
            return prev + cur.points
          }, 0),
          
          correctAnswers,
          wrongAnswers,
        }
      case "CLOSE_FINISH_SCREEN":
        return{
          ...state,
          status: "ready",
          index: 0,
          selectedOption: null,
          score: 0,

        }
      case "TIME":
        return {
          ...state,
          gameTime: state.gameTime -1
        }
    default:
      throw new Error("Something went wrong can not start the game");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
