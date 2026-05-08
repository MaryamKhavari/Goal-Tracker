import { useReducer } from "react"
import { goalsReducer } from "./reducers/goalsReducer"
import { sampleGoals } from "../data/goals"

const storedGoals = JSON.parse(localStorage.getItem("goals"))

const initialState = storedGoals || sampleGoals

export default function GoalsProvider({ children }) {
  const [goals, dispatch] = useReducer(goalsReducer, initialState)

  return (
    <GoalsContext.Provider value={{ goals, dispatch }}>
      {children}
    </GoalsContext.Provider>
  )
}