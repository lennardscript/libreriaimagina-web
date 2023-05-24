import { BookPage } from "../pages";
import { fetchData } from "../api/fetchData";
import { Suspense } from "react";
import { useParams } from "react-router-dom";

export function BookDetail() {

  const { bookId } = useParams();

  const apiData = fetchData(`http://127.0.0.1:5000/books/${bookId}`);

  const data = apiData.read();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          {data?.map((bookId) => (
            <BookPage key={bookId.id} bookId={bookId} />
          ))}
      </Suspense>
    </>
  );
}
