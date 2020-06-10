import React, { createContext, useReducer } from 'react'

import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'
import {
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  DELETE_BLOGPOST,
  GET_BLOGPOSTS,
} from './constants'

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_BLOGPOST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: payload.title,
          content: payload.content,
        },
      ]
    case EDIT_BLOGPOST:
      return state.map((blogPost) =>
        blogPost.id === payload.id ? payload : blogPost
      )
    case DELETE_BLOGPOST:
      return state.filter((blogPost) => blogPost.id != payload)
    case GET_BLOGPOSTS:
      return payload
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: ADD_BLOGPOST, payload: { title, content } })
    callback()
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: EDIT_BLOGPOST, payload: { id, title, content } })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: DELETE_BLOGPOST, payload: id })
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: GET_BLOGPOSTS, payload: response.data })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
  []
)

// const initialBlogPosts = [
//   { title: 'Blog #1' },
//   { title: 'Blog #2' },
//   { title: 'Blog #3' },
//   { title: 'Blog #4' },
//   { title: 'Blog #5' },
// ]
