import { BiTrash, BiCartAdd } from "react-icons/bi";
import { Footer, Navbar } from "../components";
import { useId } from "react";
import { useCart } from "../components/hooks/useCart";

function CartItem({ title, price, thumbnail, quantity, addToCart }) {
  const cartCheckboxId = useId();

  const { removeFromCart } = useCart();

  return (

      <li className="flex items-center gap-4">
        <img
          src={thumbnail}
          alt={title}
          className="h-16 w-16 rounded object-cover"
        />

        <div>
          <strong className="text-sm text-gray-900">{title}</strong>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Precio: ${price}</dt>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <div>
            <div>
              <label htmlFor={cartCheckboxId} className="sr-only">
                {" "}
                Quantity{" "}
              </label>

              <div className="flex items-center gap-1">
                <input
                  type="number"
                  id="cartCheckboxId"
                  value={quantity}
                  className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                  onClick={addToCart}
                  type="button"
                  className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  <BiCartAdd />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={removeFromCart}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Remove Book</span>
            <BiTrash className="h-4 w-4" />
          </button>
        </div>
      </li>
  );
}
export function CartPage() {

  const { cart, addToCart } = useCart();

  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl underline underline-offset-4 decoration-red-500 ">
                Tu carrito de compra
              </h1>
            </div>

              <ul className="space-y-4">
                {cart.map(book => (
                  <CartItem
                  key={book.id}
                  addToCart={() => addToCart(book)}
                  {...book} />
                ))}
              </ul>

            <div className="mt-8">
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-end !text-base font-medium">
                      <dt className="px-1">Total</dt>
                      <dd>$</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button className="block py-5 px-25 text-sm font-medium">
                      <span className="group relative inline-block focus:outline-none focus:ring">
                        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                          Pagar
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
