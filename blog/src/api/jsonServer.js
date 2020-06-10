import axios from 'axios'

const baseUrl = 'http://989038469368.ngrok.io' //TODO: change everytime after run 'ngrok' from 'mock-server' folder

export default axios.create({
  baseURL: baseUrl,
})
