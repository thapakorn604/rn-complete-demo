import createDataContext from './createDataContext'

import {
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  DELETE_BLOGPOST,
  GET_BLOGPOSTS,
} from './constants'

//Intitial State

const initialState = [
  {
    id: 1001,
    title: 'BlogPost #1',
    content: 'Content #1',
  },
  {
    id: 1002,
    title: 'BlogPost #2',
    content: 'Content #2',
  },
  {
    id: 1003,
    title: 'BlogPost #3',
    content: 'Content #3',
  },
]

// Reducer

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

// Actions

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: ADD_BLOGPOST, payload: { title, content } })
    callback()
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: EDIT_BLOGPOST, payload: { id, title, content } })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: DELETE_BLOGPOST, payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  initialState
)
