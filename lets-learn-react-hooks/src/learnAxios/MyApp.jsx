import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = "https://dummyjson.com/products";

const MyApp = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
     axios.get(url)
     .then((response) => {
        setProducts(response.data.products);
     })
     .catch((error) => console.log(error))
    }, [])
    

  return (
    <>
        {products.map((product,index) => {
            return <h3 key={index}>{product.title} - {product.price}</h3>
        })}
    </>
  )
}

export default MyApp