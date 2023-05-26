import { BiBookmarkHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

export function BookCard({ book }) {

  const { addToCart } = useCart()

  return (
    <>
      <div>
        <Link to={`/book/${book.id}`} className="group relative block overflow-hidden">
          <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <BiBookmarkHeart className="h-4 w-4" />
          </button>
          <img
            src={book.thumbnail}
            alt="Book Image"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
        </Link>

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-emerald-400 px-3 py-1.5 text-xs font-medium">
            New
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {book.title}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700 p-1">${book.price}</p>
            <button onClick={() => addToCart(book)}
              className="group relative inline-block focus:outline-none focus:ring">
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Añadir al carrito
              </span>
            </button>
        </div>
      </div>
    </>
  );
}
