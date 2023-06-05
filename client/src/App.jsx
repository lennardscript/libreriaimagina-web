import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  BooksPage,
  BookPage,
  LoginPage,
  SignupPage,
  UserAuthPage,
  CartPage,
  PaymentSuccessPage
} from "./pages/";
import { CartProvider } from "./components/context/cart";
import { PurchaseTrackingPage } from "./pages/PurchaseTrackingPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/userauth" element={<UserAuthPage />} />
          <Route path="/tracing" element={<PurchaseTrackingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/success' element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
