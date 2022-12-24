// import React from "react";
// import "./CheckoutProduct.css";
// import { useStateValue } from "./StateProvider";

// function CheckoutProduct({ id, title, image, price, rating }) {
//   const [{ basket }, dispatch] = useStateValue();
//   const removeFromBasket = () => {
//     //remove forbasket
//     dispatch({
//       type: "REMOVE_FORM_BASKET",
//       id: id,
//     });
//   };
//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} alt="" />
//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct_rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//         <button onClick={removeFromBasket}>Remove from basket</button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;
import React from "react";
import star from "../../images/star.png";
import "./CheckoutProduct.css";
import { useStateValue } from "../stateProvider/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="Product" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          {price}
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <img key={index} src={star} alt="Star rating" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
