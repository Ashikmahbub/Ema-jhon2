import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import { removeFromDb,deleteShoppingCart  } from '../../utilities/fakedb';

const Orders = () => {
    const {products,initialCart} =useLoaderData();
    const [cart,setCart] =useState(initialCart);
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    const itemIncrement =id =>{
        for (const product of cart){
            console.log(product);
            if (product.id===id){
                product.quantity =product.quantity+1;
                
                 
                 
                 
            }
        }
         
        

       
       console.log(id);
      
       
         


        
    
        
    
    }
    const deleteItem =id=>{ 
        const remaining =cart.filter(product =>product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    
        
        
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
               {

                    cart.map(product => <ReviewOrder
                        

                        key={product.id}

                        product={product}
                        deleteItem ={deleteItem}
                        itemIncrement ={itemIncrement}
                        clearCart ={clearCart}
                     
                         
                         
                         >

                         </ReviewOrder>)

               } 

            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                clearCart={clearCart}
                ></Cart>

            </div>
            
            
            
        </div>
    );
};

export default Orders;