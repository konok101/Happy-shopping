import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product)=>{
        console.log('dsds', product);
        const newCart= [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                    handleAddToCart={handleAddToCart}
                         key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <p>Selected item {cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;