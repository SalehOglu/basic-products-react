import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"
function ProductsList({limit}) {
    const api = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([])
    const getProducts = () => {
        fetch(api).then((response)=> response.json()).then(data=>setProducts(data))
    }
    useEffect(()=>{
        getProducts()
    },[])

    const displayedProducts = limit ? products.slice(0, limit): products

    return(
        <>
            <div className="container">
                <div className="row">
                    {displayedProducts.map((product)=>{
                        return(
                            <div className="col-lg-4 col-md-6" key={product.id}>
                                <ProductCard product={product}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsList