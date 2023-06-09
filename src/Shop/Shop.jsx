import React, { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
       

       {
        products.map(product => <Product key={product.id} product={product}></Product>)
       }

            </div>

            <div className='order-container'>
        <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;