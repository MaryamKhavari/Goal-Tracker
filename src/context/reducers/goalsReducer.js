export function goalsReducer(state, action) {

  switch (action.type) {

    case "UPDATE_PROGRESS":

      return state.map(goal => {

        if (goal.id === action.payload.id) {

          const updatedProgress =
            goal.progress + action.payload.amount

          return {
            ...goal,

            progress: updatedProgress,

            status:
              updatedProgress >= goal.target
                ? "completed"
                : "active"
          }
        }

        return goal
      })

    default:
      return state
  }
}