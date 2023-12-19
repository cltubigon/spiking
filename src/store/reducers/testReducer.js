/* eslint-disable default-case */
import { produce } from "immer"

const initialState = {
  pagination: {
    athletes: {
      currentPage: 1,
    },
  },
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEST_ACTION":
      return produce(state, (draft) => {
        draft.pagination.athletes.currentPage = action.payload
      })
    default:
      return state
  }
}

export default testReducer