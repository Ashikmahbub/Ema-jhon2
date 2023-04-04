import React from 'react';
import './ReviewOrder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewOrder = ({product,deleteItem,itemIncrement,clearCart}) => {
    const {id,name,price ,quantity,img,shipping,} =product;
    
    return (
        <div className='review-item'>
            <div>
                    <img src= {img} alt=''/>
            </div>
            <div className='review-details-container'>
                <div className='review-details' >
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='increment' onClick={()=>itemIncrement(id)}>+</button>
                    <button className='decrement'>-</button>


                    <button className='delete' onClick={()=>deleteItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                    
                </div>
                   
            </div>

        </div>
    );
};

export default ReviewOrder;