import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Add an event handler to toggle item's status in the cart
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  // Step 3: Update className based on isInCart state
  const itemClass = isInCart ? "in-cart" : "";

  // Step 4: Update button text dynamically based on isInCart state
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 2: Add event handler to button */}
      <button className="add" onClick={toggleCartStatus}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
