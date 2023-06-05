import { BookPage } from "../pages";
import { fetchData } from "../api/fetchData";
import { Suspense } from "react";

const apiData = fetchData(`http://127.0.0.1:5000/books/`);

export function BookDetail() {

  const data = apiData.read();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          {data?.map((book, bookId) => (
            <BookPage key={bookId} bookId={book} />
          ))}
      </Suspense>
    </>
  );
}
