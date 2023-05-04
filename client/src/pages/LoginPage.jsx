import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <>
      <Navbar />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl underline decoration-red-500">
              Inicie sesión
            </h1>

            <p className="mt-4 text-gray-500">
              Complete los campos requeridos para acceder
            </p>
          </div>

          <form action="post" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                ¿No tiene cuenta?
                <Link to='/signup' className="underline p-1">
                  Registrese aquí
                </Link>
              </p>
              <a
                className="group relative inline-block focus:outline-none focus:ring"
                href="/templates/user.html"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  Iniciar sesión
                </span>
              </a>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Bienvenida"
            src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/templates/index.html">
              <img className="h-8 sm:h-10" src="" alt="Logo" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Bienvenido a{" "}
              <strong className="underline decoration-red-500">
                Librería Imagina
              </strong>
              📚
            </h2>
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}