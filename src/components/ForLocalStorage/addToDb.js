const addtoB = (id) => {

    let shoppingCart = {};

    //get the shopping cart
    const storeCart = localStorage.getItem('shopping-Cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }



    //add quentity
    const quentity = shoppingCart[id];

    if (quentity) {
        const newQuentity = parseInt(quentity) + 1;
        shoppingCart[id] = newQuentity;
        //localStorage.setItem(id, newQuentity);
    }
    else {
        shoppingCart[id] = 1;
        //   localStorage.setItem(id, 51);
    }
    localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart))
}

const getStoreCart =()=>{
    
    let shoppingCart = {};

    //get the shopping cart
    const storeCart = localStorage.getItem('shopping-Cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }
    return shoppingCart;

}

const removeFromDb = (id) => {
    const storeCart = localStorage.getItem('shopping-Cart');
    const shoppingCart = JSON.parse(storeCart);
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart))


    }

}

export { addtoB, getStoreCart, removeFromDb }