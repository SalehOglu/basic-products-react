import ProductsList from './ProductsList';

export default function AboutPage() {
    return(
        <>
           <div className="container my-5">
            <h2 className="mb-4">All Products</h2>
            <ProductsList /> 
          </div>
        </>
    )
}