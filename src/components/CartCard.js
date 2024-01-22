// Library Imports
import { useDispatch } from "react-redux";

// Component Imports
import { remove } from "../store/cartSlice";

// Style Imports
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch(); //obtaining the dispatch function from the Redux store using useDispatch()
  const { name, price, image } = product; // destructuring product to get access to the properties needed

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};
