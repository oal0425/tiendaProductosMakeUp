import { useEffect, useState } from "react";
import "../components/Productos/productos.css"
import { Link } from "react-router-dom";


function Productos (){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/productos')
        .then(response => response.json())
        .then(data => setProducts(data.payload))
    }, [])
    
    return (
        <>
            <h1> PORTO: 5173</h1>
            {products.map(product =>
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.description}</p>
                            <h4> precio: {product.prize} </h4>
                    </div>
                    <Link href="#" className="btn btn-primary"> Go somewhere </Link>
                    
                </div>

            )}
        </>
    )
}

export default Productos;