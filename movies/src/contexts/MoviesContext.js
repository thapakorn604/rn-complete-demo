import createDataContext from '../utils/createDataContext'

initialState = []

const ADD_FAVOURITE = 'ADD_FAVOURITE'
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

const moviesReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_FAVOURITE:
      return [...state, payload]
    case REMOVE_FAVOURITE:
      return state.filter((movie) => movie.id != payload)
    default:
      return state
  }
}

const addFavourite = (dispatch) => {
  return (movie, callback) => {
    dispatch({ type: ADD_FAVOURITE, payload: movie })
    callback()
  }
}

const removeFavourite = (dispatch) => {
  return (id, callback) => {
    dispatch({ type: REMOVE_FAVOURITE, payload: id })
    callback()
  }
}

export const { Context, Provider } = createDataContext(
  moviesReducer,
  { addFavourite, removeFavourite },
  initialState
)
