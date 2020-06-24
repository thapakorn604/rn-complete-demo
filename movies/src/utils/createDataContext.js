import React, { createContext, useReducer } from 'react'

export default (reducer, actions, initialState) => {
  const Context = createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const providerActions = {}
    for (let key in actions) {
      providerActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...providerActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
