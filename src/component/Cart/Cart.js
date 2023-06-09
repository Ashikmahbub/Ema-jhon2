import React from 'react';
import './Cart.css'

const Cart = ({cart,clearCart,children}) => {
    let total =0;
    let shipping =0;
    let subTotal =0;
    let quantity =0;
    for (const product of cart){
        quantity =quantity+product.quantity; 
        total =total +product.price*product.quantity;
        shipping =shipping+ product.shipping;

    }
    const tax = parseFloat((total*0.1).toFixed(2) )
    subTotal =total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
            <h3>Order Summary</h3> 
            <p> Total Products: {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping Total: ${shipping} </p>
            <p>Tax :{tax} </p>
            <h5>Grand Total: ${subTotal}</h5>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;