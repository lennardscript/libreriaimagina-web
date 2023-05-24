import { BiSearch, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MenuProfile } from "./MenuProfile";

export function Navbar() {
  return (
    <>
      <header className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button type="button" className="p-2 lg:hidden"></button>
            <Link to="/" className="flex">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
              <Link
                to="/books"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Libros
              </Link>
            </nav>

            <div className="flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span className="hidden sm:block">
                  <Link
                    to="/cart"
                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <BiCart className="h-4 w-4" />
                  </Link>
                </span>
                <MenuProfile />

                <span className="hidden sm:block">
                  <a
                    href="/search"
                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <BiSearch className="h-4 w-4" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
