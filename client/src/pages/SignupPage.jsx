import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { register } from '../actions/userActions';
import { useNavigate } from "react-router-dom";

export function SignupPage() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister);
  const {error, loading, userInfo} = userRegister;

  const navigate = useNavigate();
  const path = '/';

  useEffect(() => {
      if (userInfo) {
        navigate(path);
      }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords must match!')
    } else {
      dispatch(register(username, email, password))
    }
  }
  

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="fondo_register"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/templates/index.html">
                <img className="h-8 sm:h-10" src="/img/libros.png" alt="Logo" />
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
          </section>

          <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/templates/index.html"
                >
                  <img className="h-8 sm:h-10" src="/img/libros.png" alt="" />
                </a>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Bienvenido a{" "}
                  <strong className="underline decoration-blue-500">
                    Librería Imagina
                  </strong>
                  📚
                </h2>
              </div>

              <form method="POST" onSubmit={submitHandler} action="#" className="mx-auto mb-0 max-w-md space-y-4">
                <div className="col-span-6 sm:col-span-3">
                  <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl underline decoration-red-500">
                      Crea su cuenta
                    </h1>
                    <p className="mt-4 text-gray-500">
                      Debe completar todos los campos requeridos
                    </p>
                  </div>
                  <br />
                  <div className="relative">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="username"
                      name="username"
                      required
                      placeholder="Nombre de usuario"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <br />

                  <div className="relative">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Correo electrónico"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <br />

                  <div className="col-span-6 sm:col-span-3">
                    <div className="relative">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <br />

                    <div className="col-span-6 sm:col-span-3">
                    <div className="relative">
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Confirmar contraseña"
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <br />

                    <div className="col-span-6">
                      <p className="text-sm text-gray-500">
                        Al crear una cuenta, acepta nuestros
                        <a href="#" className="text-gray-700 underline p-1">
                          términos y condiciones
                        </a>
                        y
                        <a href="#" className="text-gray-700 underline p-1">
                          nuestra política de privacidad.
                        </a>
                      </p>
                      <br />

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          ¿Ya tiene una cuenta?
                          <Link to='/login' className="underline p-1">
                            Inicie sesión aquí
                          </Link>
                        </p>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 p-5">
                          <a
                            className="group relative inline-block focus:outline-none focus:ring"
                            href="/login"
                          >
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                              Registrarse
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
