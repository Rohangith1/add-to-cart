import React, { useState } from "react";
import "../styles/cartPage.css";

const CartPage = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="quantity-controls">
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.price}</span>
          </div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

// import React, { useState } from "react";
// import '../styles/cartPage.css'

// const CartPage = ({ cart, setCart }) => {
//   const [price, Price] = useState(0);
//   return (
//     <div>
//       {cart?.map((item) => (
//         <div className="cart-box" key={item.id}>
//           <div className="cart-img">
//             <img src={item.img} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button>+</button>
//             <button>+</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//           </div>
//           <button>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartPage;
