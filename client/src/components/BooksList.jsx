import { useEffect, useState } from "react";
import { getAllBooks } from "../api/books.api";
import { BookCard } from "./BookCard";

export function BooksList() {
  /* Se ejecuta apenas se carga la página para llamar todos los datos de los libros */
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const res = await getAllBooks();
      setBooks(res.data);
    }
    loadBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
