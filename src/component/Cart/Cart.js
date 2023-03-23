import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <p>Total number Products.:{cart.length}</p>
        </div>
    );
};

export default Cart;