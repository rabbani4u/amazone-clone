import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://www.sellerapp.com/blog/wp-content/uploads/2019/04/amazon-dsp.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
