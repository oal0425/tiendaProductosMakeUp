import { useEffect, useState } from "react";

function fetchProducts (){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => setProducts(data.payload))
    }, [])

    return (
        <>
            <h1> PORTO: 5173</h1>
            {products.map(product =>
                <div key={product.id}>
                    <h2> ID: {product.id} </h2>
                    <h3> producto: {product.name} </h3>
                    <h3> descripcion: {product.description} </h3>
                    <h3> precio: {product.prize} </h3>
                </div>
            )}
        </>
    )
}

export default fetchProducts;
