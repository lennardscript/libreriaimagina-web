import { Footer, Navbar } from "../components";
import { BooksList } from "../components/BooksList";
export function BooksPage() {
  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl underline underline-offset-4 decoration-red-500">
              Listado de libros
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Nuestra categoría de libros
            </p>
          </header>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              In Stock (5+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Pre Order (3+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Out of Stock (10+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          The highest price is $600
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="hidden sm:block">
              <label htmlFor="SortBy" className="sr-only">
                SortBy
              </label>

              <select
                id="SortBy"
                className="h-10 rounded border-gray-300 text-sm"
              >
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>
          </div>
            <BooksList />
        </div>
      </section>

      {/* <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl underline underline-offset-4 decoration-red-500">
              Listado de libros
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Nuestra categoría de libros
            </p>
          </header>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium">
                {" "}
                Filtros y Clasificación{" "}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Ordenar por
                </label>

                <select
                  id="SortBy"
                  className="mt-1 rounded border-gray-300 text-sm"
                >
                  <option>Ordenar por</option>
                  <option value="Title, DESC">Titulo, DESC</option>
                  <option value="Title, ASC">Titulo, ASC</option>
                  <option value="Price, DESC">Precio, DESC</option>
                  <option value="Price, ASC">Precio, ASC</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filtros
                </p>

                <div className="mt-1 space-y-2">
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">
                        {" "}
                        Disponibilidad{" "}
                      </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selecionados{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              En stock (3+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Hacer un pedido (1+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Agotado (2+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">Precio</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          El precio más alto es $25.000
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reiniciar
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="Desde"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="Hasta"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">Categorías</span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Seleccionada{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reiniciar
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Política
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Filosofía
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Cocina
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Informática - Computación
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Poesía
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Literatura
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <BooksList />
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
