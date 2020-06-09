import React, { createContext, useReducer } from 'react'
import createDataContext from './createDataContext'

const ADD_BLOGPOST = 'ADD_BLOGPOST'
const EDIT_BLOGPOST = 'EDIT_BLOGPOST'
const DELETE_BLOGPOST = 'DELETE_BLOGPOST'

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_BLOGPOST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Iced's Blogs #${state.length + 1}`,
        },
      ]
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: ADD_BLOGPOST })
  }
}

const editBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: EDIT_BLOGPOST })
  }
}

const deleteBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: DELETE_BLOGPOST })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  []
)

// const initialBlogPosts = [
//   { title: 'Blog #1' },
//   { title: 'Blog #2' },
//   { title: 'Blog #3' },
//   { title: 'Blog #4' },
//   { title: 'Blog #5' },
// ]
