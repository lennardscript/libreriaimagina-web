/* import { useEffect, useState } from "react"; */
/* import { getAllBooks } from "../api/books.api"; */
import { BookCard } from "./BookCard";
import { fetchData } from "../api/fetchData";
import { Suspense } from "react";

/* https://api-alphilia.onrender.com/books */

const apiData = fetchData('http://127.0.0.1:5000/books')

export function BooksList() {

  const data = apiData.read();

  /* Se ejecuta apenas se carga la página para llamar todos los datos de los libros */
  /* const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const res = await getAllBooks();
      setBooks(res.data);
    }
    loadBooks();
  }, []); */

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((book, bookId) => (
        <BookCard key={bookId} book={book} />
      ))}
    </ul>
    </Suspense>
    </>
  );
}
