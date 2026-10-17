import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"

export default function ProductDetails() {
    const params = useParams();
    const [details, setDetails]= useState({})
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`).then((res)=>res.json()).then(data=>setDetails(data))
    },[params.id]);

    return(
        <div className="details">
            <h1 className="m-5">Product details: {details.title}</h1>
            <div className="container">
                <img src={details.image} className="img-small" alt={details.title}/>
               <p>{details.description}</p>
               <p><strong>Price:</strong> {details.price}</p>
               <p><strong>Category:</strong> {details.category}</p>
                <Link to="/" className="btn btn-success">Back to Homepage</Link>
            </div>
        </div>
    )
}