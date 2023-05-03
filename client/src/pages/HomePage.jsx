import { BiBookmarkHeart } from "react-icons/bi";
import { Footer, Navbar } from "../components/";
export function HomePage() {
  return (
    <>
      <Navbar />
      <section className="relative bg-[url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Librería Imagina
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Somos una empresa que cuenta con una amplia trayectoria en la
              importación y comercialización, reparación y servicio técnico de
              mantenimiento de libros. Poseemos una amplia experiencia,
              adquirida durante años de ejercicio profesional, lo que nos
              permite brindar un servicio de calidad, rápido y eficiente.
              Nuestra misión es transformarnos en una librería con el más amplio
              catálogo de libros a nivel nacional, buscamos convertirnos en una
              institución de referencia en la venta de libros a nivel
              sudamericano.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                href="/templates/team.html"
              >
                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Equipo de desarrollo
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Libros destacados
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              📚 Revise nuestras categorías 📚
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a
                href="/templates/book.html"
                className="group relative block overflow-hidden"
              >
                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <BiBookmarkHeart />
                </button>

                {/* <img
                  src="/img/libro-aristoteles.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                /> */}
                </a>

                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-emerald-400 px-3 py-1.5 text-xs font-medium">
                    New
                  </span>

                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Aristóteles - Ética a Nicómaco
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">$25.000</p>
                  <a
                    className="group relative text-sm font-medium inline-block focus:outline-none focus:ring"
                    href="/templates/cart.html"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                      Añadir al carrito
                    </span>
                  </a>
                </div>
              
            </li>

            <li>
              <a
                href="/templates/book.html"
                className="group relative block overflow-hidden"
              >
                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <BiBookmarkHeart />
                </button>

                {/* <img
                  src="/img/franzkafka.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                /> */}
                </a>

                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-emerald-400 px-3 py-1.5 text-xs font-medium">
                    New
                  </span>

                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Franz Kafka - El Castillo
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">$9.990</p>

                  <form className="mt-4">
                    <a
                      className="group relative text-sm font-medium inline-block focus:outline-none focus:ring"
                      href="/templates/cart.html"
                    >
                      <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                        Añadir al carrito
                      </span>
                    </a>
                  </form>
                </div>
              
            </li>

            <li>
              <a
                href="/templates/book.html"
                className="group relative block overflow-hidden"
              >
                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <BiBookmarkHeart />
                </button>

                {/* <img
                  src="/img/platon.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                /> */}
                </a>

                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-emerald-400 px-3 py-1.5 text-xs font-medium">
                    New
                  </span>

                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Platón - El Banquete
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">$6.990</p>

                  <form className="mt-4">
                    <a
                      className="group relative text-sm font-medium inline-block focus:outline-none focus:ring"
                      href="/templates/cart.html"
                    >
                      <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                        Añadir al carrito
                      </span>
                    </a>
                  </form>
                </div>
            </li>
          </ul>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
