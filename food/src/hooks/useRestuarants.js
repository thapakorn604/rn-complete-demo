import { useState, useEffect } from 'react'

import yelp from '../api/yelp'

export const useRestuarants = (initialValue) => {
  const [restuarants, setRestuarants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    searchRestuarants(initialValue)
  }, [])

  const searchRestuarants = async (keyword) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: keyword,
          location: 'san jose',
        },
      })
      setRestuarants(response.data.businesses)
    } catch (error) {
      setErrorMessage('Sorry! something went wrong.')
    }
  }

  return [searchRestuarants, restuarants, errorMessage]
}
