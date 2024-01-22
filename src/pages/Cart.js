// Library Imports
import { useSelector } from "react-redux";

// Component Imports
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const cartList = useSelector((state) => state.cartState.cartList); // extracting cartList data from the Redux store using useSelector()

  const total = useSelector((state) => state.cartState.total); // extracting total value data from the Redux store using useSelector()

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
