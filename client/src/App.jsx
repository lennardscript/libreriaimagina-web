import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, BooksPage, BookPage, LoginPage, SignupPage, UserAuthPage, CartPage } from "./pages/";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/userauth" element={<UserAuthPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
