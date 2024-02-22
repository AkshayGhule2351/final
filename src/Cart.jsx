import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from './redux';


const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const delProduct = (product) => {
    dispatch(delCart(product));
  }


  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <center><h1 className="mt-8" style={{ color: "red" ,height:"350px"}}>Your Cart is Empty</h1></center>;
    }

    return cartItems.map((product) => (
      <div key={product.id} className="mb-4 p-3 border" style={{ backgroundColor: "lightgray" }}>
        <div className="d-flex align-items-center">
          <img src={product.image} alt={product.title} style={{ width: '250px', marginRight: '20px' }} />
          <div>
            <h1 className="mb-2">{product.title}</h1>
            <h5 className="mb-2">Category: {product.category}</h5>
            <h5 className="mb-2">Quantity: <span style={{ color: "red" }}>{product.qty}</span> </h5>
            <h5 className="mb-2">Price: <span style={{ color: "green" }}>₹{product.price * product.qty}</span></h5>
            <h5 className="mb-2">Description: {product.description}</h5>
            <button className="btn btn-outline-dark v px-4 py-2 mt-5" onClick={() => delProduct(product)} >Remove From Cart</button>

          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container py-5">
      
      {renderCartItems()}
    </div>
  );
};

export default Cart;
