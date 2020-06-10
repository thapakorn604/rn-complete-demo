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
  // ADD/EDIT/DELETE BLOG in reducer used to work when json server is not integrated.
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
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })
    // dispatch({ type: ADD_BLOGPOST, payload: { title, content } })
    callback()
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    // dispatch({ type: EDIT_BLOGPOST, payload: { id, title, content } })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    // dispatch({ type: DELETE_BLOGPOST, payload: id })
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
