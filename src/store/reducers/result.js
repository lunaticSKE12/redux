import * as actionType from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionType.STORE_RESULT:
      // changed data
      return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) })

    case actionType.DELETE_RESULT:
      // const id = 2
      // const newArray = [...state.results]
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(result => result.id !== action.resultElId)
      return updateObject(state, { results: updatedArray })
  }
  return state
}

export default reducer