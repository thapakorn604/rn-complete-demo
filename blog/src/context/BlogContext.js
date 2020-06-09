import React, { createContext, useReducer } from 'react'

const BlogContext = createContext()

const ADD_BLOGPOST = 'ADD_BLOGPOST'
const EDIT_BLOGPOST = 'EDIT_BLOGPOST'
const DELETE_BLOGPOST = 'DELETE_BLOGPOST'

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_BLOGPOST:
      return [...state, { title: `Blog #${state.length + 1}` }]
    default:
      return state
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [])

  const addBlogPost = () => {
    dispatch({ type: ADD_BLOGPOST })
  }

  const editBlogPost = () => {
    dispatch({ type: EDIT_BLOGPOST })
  }

  const deleteBlogPost = () => {
    dispatch({ type: DELETE_BLOGPOST })
  }

  return (
    <BlogContext.Provider
      value={{
        blogPosts: blogPosts,
        addBlogPost,
        editBlogPost,
        deleteBlogPost,
      }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext

// const initialBlogPosts = [
//   { title: 'Blog #1' },
//   { title: 'Blog #2' },
//   { title: 'Blog #3' },
//   { title: 'Blog #4' },
//   { title: 'Blog #5' },
// ]
