import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  // pull information or change infrom from the dispatch data layer
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <smal>$</smal>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* it will take the rating and multiply it by the rating we pass in the function (CheckoutProduct)*/}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        {/* button that remove the stuff from basket and the function is above */}
        <button onClick={removeFromBasket}> Remove from Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
