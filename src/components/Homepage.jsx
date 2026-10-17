import Slider from './Slider';
import ProductsList from './Products/ProductsList';
import { Link } from 'react-router';
function Homepage() {
    return(
        <>
        <div className="rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Our Shop</h1>
          <p className="col-md-8 fs-4 mx-auto">Discover our best-selling featured products.</p>
            <Slider/>
        </div>
      </div>

      <div className="container">
          <h2 className='m-5'>Featured Products</h2>
        
        <ProductsList limit={3} />
          <Link to="/products" className="btn btn-dark">
            View All Products &rarr;
          </Link>
      </div>

        </>
    )
}

export default Homepage