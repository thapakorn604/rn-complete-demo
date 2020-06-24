import films from '../api/films'

export const useMovies = () => {
  const searchMovies = async (keyword, page, success, error) => {
    try {
      const response = await films.get('/api/movies/search', {
        params: { query: keyword, page: page },
      })
      success(({ results, total_pages, page } = response.data))
    } catch (error) {
      error()
    }
  }

  const getMovieImage = (imageSource) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w92'
    return imageSource != null
      ? `${baseUrl}${imageSource}`
      : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
  }

  return [searchMovies, getMovieImage]
}
