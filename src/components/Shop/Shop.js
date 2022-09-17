import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addtoB, getStoreCart } from '../ForLocalStorage/addToDb'
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storeCart = getStoreCart();
        const savedCart =[];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity= quantity;
                savedCart.push(addedProduct);


            }
        }
        setCart(savedCart);

    }, [products])


    const handleAddToCart = (product) => {
        let newCart=[];
        const exists = cart.find(nonSelectProduct => nonSelectProduct.id === product.id);
        if(!exists){
            product.quantity =1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(nonSelectProduct => nonSelectProduct.id !== product.id);
            exists.quantity = exists.quantity +1;
            newCart= [...rest, exists]
        }
      
        setCart(newCart);
        addtoB(product.id)

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

                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;