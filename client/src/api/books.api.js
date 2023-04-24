/* API que permite mandar peticiones al backend */
import axios from 'axios'

export const getAllBooks = () => {
  return axios.get('http://localhost:8000/books/api/v1/books/')
}