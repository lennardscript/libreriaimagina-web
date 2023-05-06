import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom"
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function MenuProfile() {
  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex border-b-4 border-transparent p-6 hover:border-red-700">
            <span className="sr-only">Open user menu</span>
            <BiUserCircle className="h-4 w-4" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link to='/signup'
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Registrarse
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/login'
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Iniciar sesión
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
