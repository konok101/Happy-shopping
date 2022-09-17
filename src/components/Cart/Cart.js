import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =0;
    let shipping =0;
    let quantity=0;
    for(const product of cart){
        total= total+ product.price * product.quantity;
        quantity=quantity+ product.quantity;
        shipping= shipping+ product.shipping;

    }
    const tax= total*0.1;
    const grandTotal= total+parseInt(tax)+shipping
    return (
        <div className='cart'>
               <h4>Order Summery</h4>
                <p>Selected item {quantity}</p>
                <p>Total price${total}</p>
                <p>Total Shipping {shipping}</p>
                <p>Tax {tax.toFixed(2)}</p>
                <p>Total: {grandTotal}</p>
            
        </div>
    );
};

export default Cart;