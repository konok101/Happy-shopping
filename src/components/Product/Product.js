import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({handleAddToCart, product}) => {
    const { name, img, seller, price, ratings } = product;
    //const {handleAddToCart}= props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price ${price}</p>
                <p><small>seller: {seller}</small> </p>
                <p> <small>Rattings: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart' >
               <p className='btn-text'> Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            
            </button>

        </div>
    );
};

export default Product;