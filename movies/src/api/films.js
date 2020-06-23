import axios from 'axios'

export default axios.create({
  baseURL: 'http://scb-movies-api.herokuapp.com',
  headers: {
    'api-key': '769a1c3aedc9472635028f08aa597b19b6634d60',
  },
})
