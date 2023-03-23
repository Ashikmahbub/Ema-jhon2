import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product,addToCart}) => {
    const {name,img ,seller,ratings,price} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <p className='name'>Name: {name}</p>
                <p>Price: {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
                

            </div>
            <button onClick={()=>addToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
           
            
        </div>
    );
};

export default Product;