import createDataContext from './createDataContext'

initialState = []

moviesReducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export const { Context, Provider } = createDataContext(
  moviesReducer,
  {},
  initialState
)
