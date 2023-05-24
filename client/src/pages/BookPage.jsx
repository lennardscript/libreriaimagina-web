import { Footer, Navbar } from "../components";

export function BookPage({ bookId }) {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Book Image"
                src={bookId.thumbnail}
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>

            <div className="sticky top-0">
              <strong>
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ml-1 mr-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="whitespace-nowrap text-sm">Disponible</p>
                </span>
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {bookId.title}
                  </h1>

                  <div className="-ml-0.5 flex text-gray-500">
                    Autor
                  </div>
                </div>

                <p className="text-lg font-bold">${bookId.price}</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>
                    {bookId.description}
                  </p>
                </div>
              </div>

              <form className="mt-8">
                <div className="mt-8 flex gap-4">
                  <div>
                    <input
                      type="number"
                      id="Quantity"
                      min='0'
                      x-model="productQuantity"
                      class="h-10 w-24 rounded border-gray-200 sm:text-sm"
                    />
                  </div>

                  <button className="block w-full p-5 text-sm font-medium">
                    <a
                      className="group relative inline-block focus:outline-none focus:ring"
                      href="/templates/cart.html"
                    >
                      <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                        Añadir al carrito
                      </span>
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
