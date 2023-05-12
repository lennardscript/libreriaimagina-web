/* API que permite mandar peticiones al backend
import axios from 'axios'

/* Obtiene todos los libros 
export const getAllBooks = () => {
  return axios.get('http://localhost:8000/books/api/v1/books/')
}
*/

function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;

      case "error":
        throw response;

      default:
        return response;
    }
  };

  return { read };
}

export function fetchData(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => json);

  return getSuspender(promise);
}
