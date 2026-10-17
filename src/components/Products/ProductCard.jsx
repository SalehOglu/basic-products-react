import { Link } from "react-router";

export default function ProductCard({product}) {
    return(
        <>
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title" title={product.title}>{product.title}</h5>
                    <p className="card-text">{product.category}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </>
    )
}