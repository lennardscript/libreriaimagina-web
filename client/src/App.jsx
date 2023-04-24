import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, BooksPage, BookPage } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
