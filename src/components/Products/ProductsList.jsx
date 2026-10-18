import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"
function ProductsList({limit}) {
    const api = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch(api).then((response)=> response.json())
        .then(data=>{
            setProducts(data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    },[])

    const displayedProducts = limit ? products.slice(0, limit): products;

    if (loading) {
        return(
            <div className="container text-center my-5">
                <p>Loading products...</p>
            </div>
        )
    }

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