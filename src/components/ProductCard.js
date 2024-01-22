// Library Imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import { add, remove } from "../store/cartSlice";

// Style Imports
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const cartList = useSelector((state) => state.cartState.cartList); // extracting cartList data from the Redux store using useSelector()

  const [isInCart, setIsInCart] = useState(false); // state variable to check if a product is in cart or not

  const { name, price, image } = product; // Destructuring product to get access to the properties needed
  const dispatch = useDispatch(); // obtaining the dispatch function from the Redux store using useDispatch()

  // updating isInCart whenever the cartList & product.id changes
  useEffect(() => {
    // true if the cartItem contains any products
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );

    // setting isInCart true/false depending on the productIsInCart value
    if (productIsInCart) {
      setIsInCart(true); // setting true because product is in cart
    } else {
      setIsInCart(false); // setting false because product is not in cart
    }
  }, [product.id, cartList]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button
            className="remove"
            onClick={() => {
              dispatch(remove(product));
            }}
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(add(product));
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
