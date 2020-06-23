import { useState, useEffect } from 'react'

import films from '../api/films'

export const useMovies = () => {
  const searchMovies = async (keyword, page, success, error) => {
    console.log(keyword, page)
    try {
      const response = await films.get('/api/movies/search', {
        params: { query: keyword, page: page },
      })
      console.log(response.data.page)
      success(({ results, total_pages, page } = response.data))
    } catch (error) {
      error()
    }
  }

  const getMovieImage = (imageSource) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w92'
    return `${baseUrl}${imageSource}`
  }

  return [searchMovies, getMovieImage]
}
